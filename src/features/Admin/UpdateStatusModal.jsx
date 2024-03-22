import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import ImageUpload from "../../ui/ImageUpload";
import Modal from "../../ui/Modal";
import { useEditTransaction } from "../../hooks/Admin/useEditTransaction";

function UpdateStatusModal({ onClose, transaction }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("");
  const [reply, setReply] = useState("");
  const [id, setId] = useState("");

  const { editTransaction, isEdit } = useEditTransaction();

  useEffect(
    function () {
      setId(transaction?.id);
    },
    [transaction]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const imageUrl = images;
    editTransaction(
      { id, reply, status, imageUrl },
      {
        onSettled: () => {
          onClose(false);
        },
      }
    );
  }

  return (
    <Modal onClose={onClose}>
      <h1 className="text-sm mb-2">Name: Jamiu Abdulkareem</h1>
      <div className="flex items-center gap-2 mb-2">
        {transaction?.uploadImage_url?.map((img) => (
          <img
            loading="lazy"
            key={img}
            className="w-[20px] h-[20px]"
            src={img}
            alt="uuu"
          />
        ))}
      </div>
      <div className="mb-2 w-80">
        <p>{transaction?.e_code}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <input
            className="tradeInput block w-80"
            type="text"
            value={status}
            placeholder="status"
            onChange={(e) => setStatus(e.target.value)}
            disabled={isEdit}
          />
        </FormRow>
        <ImageUpload images={images} setImages={setImages} />
        <FormRow>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="textArea block w-80"
            placeholder="Text reply"
            disabled={isEdit}
          />
        </FormRow>
        <Button disabled={isEdit} type="secondary">
          Update Order
        </Button>
      </form>
    </Modal>
  );
}

export default UpdateStatusModal;
