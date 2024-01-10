import { useQuery } from "react-query";
import getGiftCard from "../../services/apiGiftCard";

export function useGiftCard() {
  const {
    isLoading,
    data: giftcard,
    error,
  } = useQuery({
    queryKey: ["giftcard"],
    queryFn: getGiftCard,
  });

  return { isLoading, giftcard };
}
