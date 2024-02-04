import { useMutation } from "react-query";
import { createTransaction } from "../services/apiAccount";
import toast from "react-hot-toast";

export function useCreateTransaction() {
  const { mutate: createTrans, isLoading: isCreateTrans } = useMutation({
    mutationFn: ({ fullName, type, amount, country, imageN, e_code, price }) =>
      createTransaction({
        fullName,
        type,
        amount,
        country,
        imageN,
        e_code,
        price,
      }),
    onSuccess: () => {
      toast.success("Order have been successfully submited");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Failed to submit order");
    },
  });

  return { createTrans, isCreateTrans };
}
