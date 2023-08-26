import Button from "./Button";
import Popup from "./Popup";
import styles from "./WithdrawFunds.module.css";
import Combobox from "react-widgets/Combobox";

function WithdrawFund() {
  return (
    <>
      <Popup>
        <h3 className={styles.h3}>Withdraw Funds</h3>
        <form className={styles.form}>
          {/* <input type="text" placeholder="Enter full name" /> */}
          <Combobox
            hideCaret
            hideEmptyPopup
            data={["Red", "Yellow", "Blue", "Orange"]}
            placeholder="Select bank account"
          />

          <input type="tel" placeholder="Enter Amount" />
          <Button>Withdraw</Button>
        </form>
      </Popup>
    </>
  );
}

export default WithdrawFund;
