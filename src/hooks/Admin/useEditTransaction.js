import { useMutation } from "react-query";
import { editUserTansaction } from "../../services/Admin/apiAdmin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useEditTransaction() {
  const navigate = useNavigate();

  const { mutate: editTransaction, isLoading: isEdit } = useMutation({
    mutationFn: ({ imageUrl, status, reply, id }) =>
      editUserTansaction({ imageUrl, status, reply, id }),

    onSuccess: (trans) => {
      // console.log(trans);
      // navigate("/orders");
      toast.success("Edit successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to edit");
    },
  });

  return { editTransaction, isEdit };
}
