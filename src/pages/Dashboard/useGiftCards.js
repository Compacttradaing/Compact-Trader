import { useQuery } from "@tanstack/react-query";
import { getGiftCard } from "../../services/apiTrade";

export function useGiftCards() {
  const { data: giftcards, isLoading } = useQuery({
    queryKey: ["giftcards"],
    queryFn: getGiftCard,
  });

  return { giftcards, isLoading };
}
