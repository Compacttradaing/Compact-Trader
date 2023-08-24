import { useState } from "react";
import styles from "./TradeNav.module.css";
import { IoIosEye } from "react-icons/io";

function TradeNav({ children }) {
  const [hiddeBalance, setHiddeBalance] = useState(false);

  function handleHidde() {
    setHiddeBalance(true);
  }

  return (
    <div className={styles.trade}>
      <div className={styles.balance}>
        <h2>Account Balance</h2>
        <span>
          {!hiddeBalance && <p>100.00</p>}
          {hiddeBalance && <p>****</p>}
          <IoIosEye className={styles.balIcon} onClick={handleHidde} />
        </span>
      </div>

      {children}
    </div>
  );
}

export default TradeNav;
