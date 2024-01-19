import { useMutation, useQueryClient } from "react-query";
import { deleteBankAccount as deleteBankAccountApi } from "../services/apiAccount";
import toast from "react-hot-toast";

export async function useDeleteBankAccount() {
  const queryClient = useQueryClient();

  const { mutate: deleteBankAccount, isLoading } = useMutation({
    mutationFn: (id) => deleteBankAccountApi(id),
    onSuccess: () => {
      toast.success("Bank successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bank"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBankAccount, isLoading };
}
