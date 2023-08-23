import { NavLink } from "react-router-dom";
import TradeNav from "../components/TradeNav";
import styles from "../components/TradeNav.module.css";
import { IoMdAddCircle, IoMdCash } from "react-icons/io";

function Wallet() {
  return (
    <>
      <TradeNav>
        <NavLink className={styles.nav}>
          <h3>Withdraw Fund</h3>
          <IoMdCash className={styles.cardIcon} />
        </NavLink>
        <NavLink className={styles.nav}>
          <h3>Add Bank Account</h3>
          <IoMdAddCircle className={styles.btcIcon} />
        </NavLink>
      </TradeNav>
    </>
  );
}

export default Wallet;
