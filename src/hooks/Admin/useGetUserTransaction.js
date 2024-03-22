import { useQuery } from "@tanstack/react-query";
import { getUserTransaction } from "../../services/Admin/apiAdmin";

export function useGetUserTransaction() {
  const { data: userTransaction, isLoading } = useQuery({
    queryKey: ["usertransaction"],
    queryFn: getUserTransaction,
  });

  // console.log(userTransaction);

  return { userTransaction, isLoading };
}
