import { useState } from "react";
import { useEditRate } from "../../hooks/Admin/useEditRate";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Modal from "../../ui/Modal";

function UpdateTradeModal({ isClose, id }) {
  const [rate, setRate] = useState("");
  const { rateEdit, isEditRate } = useEditRate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!rate) return;
    rateEdit(
      { newRate: rate, id },
      {
        onSettled: () => {
          setRate("");
          isClose(true);
        },
      }
    );
  }

  return (
    <Modal onClose={isClose}>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <input
            type="text"
            className="input"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            disabled={isEditRate}
          />
        </FormRow>
        <Button disabled={isEditRate} type="secondary">
          Update Rate
        </Button>
      </form>
    </Modal>
  );
}

export default UpdateTradeModal;
