import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";

function AddBankModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <form>
        <input
          type="text"
          className="tradeInput block w-80"
          placeholder="Enter Full Name"
          required
        />
        <input
          type="text"
          className="tradeInput block w-80"
          placeholder="Enter Bank Name"
          required
        />
        <input
          type="tel"
          className="tradeInput block w-80"
          placeholder="Enter Account Number"
          required
        />
        <div className="sm:w-96 w-80">
          <Button type="secondary">Withdraw</Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddBankModal;
