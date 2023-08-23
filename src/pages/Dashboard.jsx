import { NavLink } from "react-router-dom";
import TradeNav from "../components/TradeNav";
import { IoLogoBitcoin, IoMdCard } from "react-icons/io";
import styles from "../components/TradeNav.module.css";
import Table from "../components/Table";

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

      <Table>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>

        <tr>
          <td>ct6ehaj</td>
          <td>Amazon</td>
          <td>32000</td>
          <td>Doing</td>
        </tr>
        <tr>
          <td>ct6ehaj</td>
          <td>Amazon</td>
          <td>32000</td>
          <td>Doing</td>
        </tr>
      </Table>
    </>
  );
}

export default Dashboard;
