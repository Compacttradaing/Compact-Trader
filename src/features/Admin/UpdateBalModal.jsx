import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Modal from "../../ui/Modal";

function UpdateBalModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1 className="text-sm mb-5">Name: Jamiu Abdulkareem</h1>
      <form>
        <FormRow>
          <input
            className="tradeInput block w-80"
            type="text"
            placeholder="Amount"
            value=""
          />
        </FormRow>
        <Button type="secondary">Update Balance</Button>
      </form>
    </Modal>
  );
}

export default UpdateBalModal;
