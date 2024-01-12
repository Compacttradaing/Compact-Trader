import { useEffect, useState } from "react";

import Select from "react-select";

import Button from "../../ui/Button";
import ImageUpload from "../../ui/ImageUpload";
import { useCountry } from "./useCountry";
import { useGiftCards } from "./useGiftCards";
import getGiftCard from "../../services/apiTrade";
import { useSearchParams } from "react-router-dom";
import supabase from "../../services/supabase";

// const options = [
//   { value: data, label: data },
//   //   { value: "strawberry", label: "Strawberry" },
//   //   { value: "vanilla", label: "Vanilla" },
// ];

function TradeGiftCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectGifcardOption, setSelectGifcardOption] = useState(null);
  const [countryId, setCountryId] = useState();
  const [option, setOption] = useState([""]);
  const [gifcardOption, setGifcardOption] = useState([""]);

  const { countries } = useCountry();
  // const { giftcards } = useGiftCards();
  // const { giftcardList } = getGiftCard();

  useEffect(
    function () {
      function getData() {
        let arr = [];
        if (!countries) return [];
        countries.map((country) => {
          return arr.push({ value: country.id, label: country.name });
        });

        setOption(arr);
      }
      getData();
      if (!selectedOption) return;
      setCountryId(selectedOption.value);
    },
    [countries, selectedOption]
  );

  useEffect(
    function () {
      async function getGiftCard(id) {
        const { data, error } = await supabase
          .from("giftcards")
          .select("*")
          .eq("country_id", id);

        // console.log(data);

        let arr = [];

        data.map((card) => {
          return arr.push({ value: card.name, label: card.name });
        });

        if (!data) return;
        setGifcardOption(arr);
        // console.log("arr", arr);
      }
      if (!countryId) return;
      getGiftCard(countryId);
    },
    [countryId]
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
          />
          <input
            type="text"
            className="tradeInput"
            placeholder="Enter trade amount"
          />
          <input type="text" value="#2000" className="tradeInput" disabled />
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
