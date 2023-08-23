import styles from "./TradeNav.module.css";
import { IoIosEye } from "react-icons/io";

function TradeNav({ children }) {
  return (
    <div className={styles.trade}>
      <div className={styles.balance}>
        <h2>Account Balance</h2>
        <span>
          <p>100.00</p>
          <IoIosEye className={styles.balIcon} />
        </span>
      </div>

      {children}
    </div>
  );
}

export default TradeNav;
