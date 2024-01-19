import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import Select from "react-select";

const options = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "usdt", label: "USDT" },
  { value: "tron", label: "Tron" },
];

function WithdrawalModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <form>
        <Select
          options={options}
          className="mb-3 w-80"
          placeholder="Select your bank account"
        />
        <input
          className="tradeInput w-80"
          type="tel"
          placeholder="Enter amount"
          required
        />
        <div className=" w-80">
          <Button type="secondary">Withdraw</Button>
        </div>
      </form>
    </Modal>
  );
}

export default WithdrawalModal;
