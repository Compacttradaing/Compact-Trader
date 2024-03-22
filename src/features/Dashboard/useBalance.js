import { useQuery } from "@tanstack/react-query";
import { getAccountBalance } from "../../services/apiAccount";

export function useBalance() {
  const { isLoading, data: balance } = useQuery({
    queryKey: ["balance"],
    queryFn: getAccountBalance,
  });

  return { isLoading, balance };
}
