import { NavLink } from "react-router-dom";
import TradeNav from "../components/TradeNav";
import { IoLogoBitcoin, IoMdCard } from "react-icons/io";
import styles from "../components/TradeNav.module.css";

function Dashboard() {
  return (
    <>
      <TradeNav>
        <NavLink className={styles.nav}>
          <h3>Sell Gift Card</h3>
          <IoMdCard className={styles.cardIcon} />
        </NavLink>
        <NavLink className={styles.nav}>
          <h3>Sell Bitcoin</h3>
          <IoLogoBitcoin className={styles.btcIcon} />
        </NavLink>
      </TradeNav>
    </>
  );
}

export default Dashboard;
