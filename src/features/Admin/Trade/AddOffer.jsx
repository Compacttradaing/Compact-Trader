import Select from "react-select";
import Modal from "../../../ui/Modal";
import { useEffect, useState } from "react";
import FormRow from "../../../ui/FormRow";
import { useCountry } from "../../../pages/Dashboard/useCountry";
import Button from "../../../ui/Button";
import { useAddOffer } from "../../../hooks/Admin/useAddOffer";

function AddOffer({ onClose }) {
  const [option, setOption] = useState([""]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [country, setCountry] = useState("");
  const [giftcardName, setgiftcardName] = useState("");
  const [rate, setRate] = useState("");

  const { countries, isLoading: isLoadCountry } = useCountry();
  const { offer, isLoading: isLoadOffer } = useAddOffer();

  useEffect(
    function () {
      if (isLoadCountry) return;
      let arr = [];
      countries.map((country) => {
        return arr.push({
          value: country.country_id,
          label: country.country_id,
        });
      });
      setOption(arr);
    },
    [countries, isLoadCountry]
  );

  useEffect(
    function () {
      if (!selectedOption) return;
      setCountry(selectedOption?.value);
    },
    [selectedOption]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!country || !giftcardName || !rate) return;

    offer(
      {
        country,
        giftcardName,
        rate,
      },
      {
        onSettled: () => {
          setRate("");
          setgiftcardName("");
        },
      }
    );
  }

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder="Select Country"
            className="block w-80"
            isDisabled={isLoadCountry || isLoadOffer}
          />
        </FormRow>
        <FormRow>
          <input
            type="text"
            className="tradeInput w-80 block"
            placeholder="Gift Card Name"
            value={giftcardName}
            onChange={(e) => setgiftcardName(e.target.value)}
            required
          />
        </FormRow>
        <FormRow>
          <input
            type="tel"
            className="tradeInput w-80 block"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </FormRow>
        <Button type="secondary">Submit</Button>
      </form>
    </Modal>
  );
}

export default AddOffer;
