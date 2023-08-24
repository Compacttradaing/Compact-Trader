import styles from "./Popup.module.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Popup({ children }) {
  const navigate = useNavigate();

  function handleHidden() {
    navigate(-1);
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <IoMdClose className={styles.closeIcon} onClick={handleHidden} />
        {children}
      </div>
    </div>
  );
}

export default Popup;
