import styles from "./Header.module.css";
import { IoIosLogOut } from "react-icons/io";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Welcome,John</h1>
      <button>
        <span>SignOut</span>
        <IoIosLogOut className={styles.icon} />
      </button>
    </div>
  );
}

export default Header;
