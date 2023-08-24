import { NavLink } from "react-router-dom";
import TradeNav from "../components/TradeNav";
import styles from "../components/TradeNav.module.css";
import { IoMdAddCircle, IoMdCash } from "react-icons/io";
import Table from "../components/Table";

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

      <Table>
        <tr>
          <th>Name</th>
          <th>Bank name</th>
          <th>Account number</th>
        </tr>

        <tr>
          <td>John David</td>
          <td>Access Bank</td>
          <td>573382328929</td>
        </tr>

        <tr>
          <td>John David</td>
          <td>Access Bank</td>
          <td>573382328929</td>
        </tr>
      </Table>
    </>
  );
}

export default Wallet;
