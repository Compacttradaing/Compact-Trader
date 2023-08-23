import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosPerson, IoIosPie, IoIosWallet } from "react-icons/io";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="dashboard" className={styles.link}>
            <IoIosHome className={styles.icon} />
            <p className={styles.title}>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="wallet" className={styles.link}>
            <IoIosWallet className={styles.icon} />
            <p className={styles.title}>Wallet</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="transaction" className={styles.link}>
            <IoIosPie className={styles.icon} />
            <p className={styles.title}>Transaction</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="account" className={styles.link}>
            <IoIosPerson className={styles.icon} />
            <p className={styles.title}>Account</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
