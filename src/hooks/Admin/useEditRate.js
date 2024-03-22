import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editRate } from "../../services/Admin/apiAdmin";
import toast from "react-hot-toast";

export function useEditRate() {
  const queryClient = useQueryClient();

  const { mutate: rateEdit, isLoading: isEditRate } = useMutation({
    mutationFn: ({ newRate, id }) => editRate({ newRate, id }),

    onSuccess: () => {
      toast.success("Rate edit successfully");
      queryClient.invalidateQueries({ queryKey: ["giftcards"] });
    },
    onError: () => {
      toast.error("Failed to edit");
    },
  });

  return { rateEdit, isEditRate };
}
