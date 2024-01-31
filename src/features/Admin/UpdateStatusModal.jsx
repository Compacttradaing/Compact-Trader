import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Modal from "../../ui/Modal";

function UpdateStatusModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1 className="text-sm mb-5">Name: Jamiu Abdulkareem</h1>
      <form>
        <FormRow>
          <input
            className="tradeInput block w-80"
            type="text"
            value="Pending"
          />
        </FormRow>
        <FormRow>
          <textarea className="textArea block w-80" />
        </FormRow>
        <Button type="secondary">Update Order</Button>
      </form>
    </Modal>
  );
}

export default UpdateStatusModal;
