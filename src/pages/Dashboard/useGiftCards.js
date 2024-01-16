import { useMutation, useQuery, useQueryClient } from "react-query";
import { getGiftCard } from "../../services/apiTrade";

export function useGiftCards() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: giftcard } = useMutation({
    mutationFn: getGiftCard,
    onSuccess: (giftcards) => {
      queryClient.setQueriesData(["giftcards"], giftcards);
      alert("hi");
    },
    onError: (err) => console.log(err),
  });

  return { isLoading, giftcard };
}
