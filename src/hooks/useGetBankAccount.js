import { useQuery } from "react-query";
import { getBankAccount } from "../services/apiAccount";

export function useGetBankAccount() {
  const { data: bank, isLoading } = useQuery({
    queryKey: ["bank"],
    queryFn: getBankAccount,
  });

  return { bank, isLoading };
}
