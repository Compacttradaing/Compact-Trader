import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Modal from "../../ui/Modal";

function UpdateTradeModal({ isClose }) {
  return (
    <Modal onClose={isClose}>
      <form>
        <FormRow>
          <input type="text" className="input" placeholder="Rate" />
        </FormRow>
        <Button type="secondary">Update Rate</Button>
      </form>
    </Modal>
  );
}

export default UpdateTradeModal;
