import { useMutation, useQueryClient } from "react-query";
import { addBankAccount } from "../services/apiAccount";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useAddBankAccount() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: bank, isLoading } = useMutation({
    mutationFn: ({ fullName, bankName, accountNumber }) =>
      addBankAccount({ fullName, bankName, accountNumber }),

    onSuccess: (bank) => {
      queryClient.setQueryData(["bank"], bank);
      toast.success("Bank add successfully");
      navigate("wallet", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Failed to add bank account");
    },
  });

  return { bank, isLoading };
}
