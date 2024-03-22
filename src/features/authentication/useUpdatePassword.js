import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdatePassword() {
  const navigate = useNavigate();
  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: ({ email, password }) => updatePasswordApi({ email, password }),
    onSuccess: () => {
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provide valid email address");
    },
  });

  return { updatePassword, isLoading };
}
