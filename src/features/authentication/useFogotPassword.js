import { useMutation } from "react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: (email) => forgotPasswordApi(email),
    onSuccess: () => {
      toast.success("Reset link have been sent to your email");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provide valid email address");
    },
  });
  return { forgotPassword, isLoading };
}
