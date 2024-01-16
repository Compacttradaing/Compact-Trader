import { useMutation, useQueryClient } from "react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return {logout, isLoading}
}