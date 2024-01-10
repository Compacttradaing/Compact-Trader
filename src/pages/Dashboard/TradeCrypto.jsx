import { useRef, useState } from "react";
import Select from "react-select";
import { IoCopyOutline } from "react-icons/io5";
import copy from "copy-to-clipboard";
import ImageUpload from "../../ui/ImageUpload";
import Button from "../../ui/Button";

const options = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "usdt", label: "USDT" },
  { value: "tron", label: "Tron" },
];

function TradeCrypto() {
  const [selectedOption, setSelectedOption] = useState(null);
  const textRef = useRef();

  console.log(selectedOption);

  function copyToClipboard() {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);

    if (isCopy) alert("copy");
  }

  return (
    <>
      <div className="grid place-items-center mt-5">
        <form className="block w-full sm:w-96">
          <Select
            options={options}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            className="mb-3"
          />
          <label
            htmlFor="copyText"
            className="flex items-center border-indigo-200 bg-white border px-2 py-1.5 mb-3 rounded-md"
          >
            <input
              id="copyText"
              type="text"
              className="sm:w-96 w-full bg-transparent"
              value="gdeywyuwe"
              ref={textRef}
              disabled
            />
            <span role="button" onClick={copyToClipboard}>
              <IoCopyOutline />
            </span>
          </label>
          <input
            type="text"
            className="tradeInput"
            placeholder="Enter trade amount"
          />
          <input type="text" value="#2000" className="tradeInput" disabled />
          <ImageUpload />
          <Button type="secondary">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default TradeCrypto;
