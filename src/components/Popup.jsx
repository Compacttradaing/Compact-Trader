import Table from "./Table";
import styles from "./Popup.module.css";
import { IoMdClose } from "react-icons/io";

function Popup() {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <IoMdClose className={styles.closeIcon} />
        <p>Hello</p>
      </div>
    </div>
  );
}

export default Popup;
