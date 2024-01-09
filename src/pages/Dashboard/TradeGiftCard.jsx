import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import fakeApi from "../../services/fakeApi";
import axios from "axios";

// const options = [
//   { value: data, label: data },
//   //   { value: "strawberry", label: "Strawberry" },
//   //   { value: "vanilla", label: "Vanilla" },
// ];

function TradeGiftCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState([""]);
  const navigate = useNavigate();

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
    <div className="">
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className="grid place-items-center mt-5">
        <form className="block w-full sm:w-96">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder="Select Categories"
          />
        </form>
      </div>
    </div>
  );
}

export default TradeGiftCard;
