import Button from "./Button";
import Popup from "./Popup";
import styles from "./WithdrawFunds.module.css";

function WithdrawFund() {
  return (
    <>
      <Popup>
        <h3 className={styles.h3}>Withdraw Funds</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Enter full name" />
          <input type="text" placeholder="Enter bank name" />
          <input type="tel" placeholder="Enter account number" />
          <Button>Add Bank</Button>
        </form>
      </Popup>
    </>
  );
}

export default WithdrawFund;
