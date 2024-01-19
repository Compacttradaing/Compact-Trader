import { useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useAddBankAccount } from "../../../hooks/useAddBankAccount";
import { Rings, RotatingLines } from "react-loader-spinner";

function AddBankModal({ onClose }) {
  const [fullName, setFullName] = useState();
  const [bankName, setBankName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const { bank, isLoading } = useAddBankAccount();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName || !bankName || !accountNumber) return;
    bank(
      { fullName, bankName, accountNumber },
      {
        onSettled: () => {
          setFullName("");
          setBankName("");
          setAccountNumber("");
        },
      }
    );
  }

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="tradeInput block w-80"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          disabled={isLoading}
        />
        <input
          type="text"
          className="tradeInput block w-80"
          placeholder="Enter Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
          disabled={isLoading}
        />
        <input
          type="tel"
          className="tradeInput block w-80"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          disabled={isLoading}
        />
        <div className="w-80">
          <Button type="secondary" disabled={isLoading}>
            {isLoading ? (
              <div className="grid place-items-center">
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  color="grey"
                  strokeColor="#fff"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              "Add Bank"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddBankModal;
