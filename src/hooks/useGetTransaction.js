import { useQuery } from "react-query";
import { getTransaction } from "../services/apiAccount";

export function useGetTransaction() {
  const { data: transaction, isLoading: isLoadingTransaction } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransaction,
  });

  return { transaction, isLoadingTransaction };
}
