import { Combobox } from "react-widgets";
import Popup from "./Popup";
import Button from "./Button";

import styles from "./SellGiftCard.module.css";
import ImageUpload from "./ImageUpload";

function SellGiftCard() {
  function handleSubmit(e) {
    e.preveDefault();
  }

  return (
    <Popup>
      <h3 className={styles.h3}>Sell Gift Card</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <ImageUpload />
        <Button>Submit</Button>
      </form>
    </Popup>
  );
}

export default SellGiftCard;
