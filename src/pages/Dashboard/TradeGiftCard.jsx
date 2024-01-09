import { useEffect, useState } from "react";

import Select from "react-select";

import axios from "axios";
import Button from "../../ui/Button";

// const options = [
//   { value: data, label: data },
//   //   { value: "strawberry", label: "Strawberry" },
//   //   { value: "vanilla", label: "Vanilla" },
// ];

function TradeGiftCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState([""]);

  useEffect(function () {
    const getData = async () => {
      const arr = [];
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          let result = res.data;
          result.map((user) => {
            return arr.push({ value: user.name, label: user.name });
          });
          setOption(arr);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="grid place-items-center mt-5">
        <form className="block w-full sm:w-96">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder="Select Categories"
            className="mb-2"
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder="Select Sub-Categories"
            className="mb-2"
          />
          <input
            type="text"
            className="tradeInput"
            placeholder="Enter trade amount"
          />
          <input type="text" value="#2000" className="tradeInput" disabled />
          <textarea className="textArea"></textarea>
          <Button type="secondary">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default TradeGiftCard;
