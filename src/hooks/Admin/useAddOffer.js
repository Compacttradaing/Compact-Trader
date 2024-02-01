import { useMutation, useQueryClient } from "react-query";
import { addOffer } from "../../services/Admin/apiAdmin";
import toast from "react-hot-toast";

export function useAddOffer() {
  const queryClient = useQueryClient();

  const { mutate: offer, isLoading } = useMutation({
    mutationFn: ({ country, giftcardName, rate }) =>
      addOffer({ country, giftcardName, rate }),
    onSuccess: (giftcards) => {
      queryClient.setQueryData(["giftcards"], giftcards);
      toast.success("New offer added successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to add new offer");
    },
  });

  return { offer, isLoading };
}
