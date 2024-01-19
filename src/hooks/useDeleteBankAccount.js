import { useMutation, useQueryClient } from "react-query";
import { deleteBankAccount } from "../services/apiAccount";
import toast from "react-hot-toast";

export function useDeleteBankAccount() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteBank } = useMutation({
    mutationFn: deleteBankAccount,
    onSuccess: () => {
      toast.success("Bank successful deleted");

      queryClient.invalidateQueries({
        queryKey: ["bank"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, deleteBank };
}
