import { Combobox } from "react-widgets";
import Popup from "./Popup";
import Button from "./Button";

import styles from "./SellGiftCard.module.css";

function SellGiftCard() {
  return (
    <Popup>
      <h3 className={styles.h3}>Sell Gift Card</h3>
      <form className={styles.form}>
        {/* <input type="text" placeholder="Enter full name" /> */}
        <Combobox
          hideCaret
          hideEmptyPopup
          data={["USA", "Canda", "Australia", "Germany"]}
          placeholder="Select country"
        />

        <Combobox
          hideCaret
          hideEmptyPopup
          data={["Red", "Yellow", "Blue", "Orange"]}
          placeholder="Select gift card type"
        />

        <input type="tel" placeholder="Enter Amount" />
        <Button>Submit</Button>
      </form>
    </Popup>
  );
}

export default SellGiftCard;
