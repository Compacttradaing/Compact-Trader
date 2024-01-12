import { useMutation, useQuery, useQueryClient } from "react-query";
import { getGiftCard } from "../../services/apiTrade";

export function useGiftCards() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: giftcards } = useMutation({
    mutationFn: getGiftCard,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["giftcards"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isLoading, giftcards };
}
