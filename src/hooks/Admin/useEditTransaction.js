import { useMutation } from "react-query";
import { editUserTansaction } from "../../services/Admin/apiAdmin";
import toast from "react-hot-toast";

export function useEditTransaction() {
  const { mutate: editTransaction, isLoading: isEdit } = useMutation({
    mutationFn: ({ imageUrl, status, reply, id }) =>
      editUserTansaction({ imageUrl, status, reply, id }),

    onSuccess: (trans) => {
      console.log(trans);
      toast.success("Edit successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to edit");
    },
  });

  return { editTransaction, isEdit };
}
