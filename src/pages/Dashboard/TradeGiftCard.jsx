import { useEffect, useState } from "react";
import Select from "react-select";

import Button from "../../ui/Button";
import ImageUpload from "../../ui/ImageUpload";
import supabase from "../../services/supabase";
import { useGetCountry } from "../../hooks/useGetCountry";
import { useCreateTransaction } from "../../hooks/useCreateTransaction";
import { useUser } from "../../features/authentication/useUser";
import Spinner from "../../ui/Spinner";

function TradeGiftCard() {
  const [selectGifcardOption, setSelectGifcardOption] = useState(null);
  const [gifcardOption, setGifcardOption] = useState([""]);
  const [amount, setAmount] = useState("");
  const [isLoadingGiftCard, setIsLoadingGiftCard] = useState(true);
  const [rate, setRate] = useState(0);
  const [images, setImages] = useState([]);
  const [e_code, setE_code] = useState("");

  const { createTrans, isCreateTrans } = useCreateTransaction();
  const { user } = useUser();
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

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedOption || !selectGifcardOption || !amount || !rate || !images)
      return;
    const country = selectedOption.value;
    const type = selectGifcardOption.value;
    const imageN = images;
    const fullName = `${user.user_metadata.firstName} ${user.user_metadata.lastName}`;
    const price = selectGifcardOption?.rate;

    createTrans(
      {
        fullName,
        type,
        amount,
        country,
        imageN,
        e_code,
        price,
      },
      {
        onSettled: () => {
          setAmount("");
          setRate(0);
          setSelectGifcardOption(null);
          setSelectedOption(null);
          setE_code("");
          setImages([]);
        },
      }
    );
  }

  if (isCreateTrans) return <Spinner />;

  return (
    <>
      <div className="grid place-items-center mt-5">
        <form onSubmit={handleSubmit} className="block w-full sm:w-96">
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
          <ImageUpload images={images} setImages={setImages} />
          <textarea
            className="textArea"
            placeholder="You can type the code of your gift card here if it's E-code"
            value={e_code}
            onChange={(e) => setE_code(e.target.value)}
          ></textarea>
          <Button type="secondary">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default TradeGiftCard;
