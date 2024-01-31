import { useEffect, useState } from "react";
import Select from "react-select";

import Button from "../../ui/Button";
import ImageUpload from "../../ui/ImageUpload";
import supabase from "../../services/supabase";
import { useGetCountry } from "../../hooks/useGetCountry";

function TradeGiftCard() {
  const [selectGifcardOption, setSelectGifcardOption] = useState(null);
  const [gifcardOption, setGifcardOption] = useState([""]);
  const [amount, setAmount] = useState("");
  const [isLoadingGiftCard, setIsLoadingGiftCard] = useState(true);
  const [rate, setRate] = useState(0);

  const { option, setSelectedOption, countryId, selectedOption } =
    useGetCountry();

  useEffect(
    function () {
      async function getGiftCard(id) {
        try {
          const { data } = await supabase
            .from("giftcards")
            .select("*")
            .eq("country_id", id);

          let arr = [];

          data.map((card) => {
            return arr.push({
              value: card.name,
              label: card.name,
              id: card.id,
              rate: card.rate,
            });
          });
          if (!data) return;
          setGifcardOption(arr);
        } catch (err) {
          throw new Error(err);
        } finally {
          setIsLoadingGiftCard(false);
        }
      }
      getGiftCard(countryId);
      // setGiftcardId(selectGifcardOption?.id);
    },
    [countryId, selectGifcardOption]
  );

  useEffect(
    function () {
      const price = selectGifcardOption?.rate * amount;
      if (!price) return;
      setRate(price);
    },
    [selectGifcardOption, amount]
  );

  return (
    <>
      <div className="grid place-items-center mt-5">
        <form className="block w-full sm:w-96">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder="Select Country"
            className="mb-2"
          />
          <Select
            defaultValue={selectGifcardOption}
            onChange={setSelectGifcardOption}
            options={gifcardOption}
            placeholder="Select Gift card"
            className="mb-2"
            isDisabled={isLoadingGiftCard}
          />
          <input
            type="text"
            className="tradeInput"
            placeholder="Enter trade amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            value={`RATE: ${rate}`}
            className="tradeInput"
            disabled
          />
          <ImageUpload />
          <textarea
            className="textArea"
            placeholder="You can type the code of your gift card here if it's E-code"
          ></textarea>
          <Button type="secondary">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default TradeGiftCard;
