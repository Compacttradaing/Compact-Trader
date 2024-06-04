import { useEffect, useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import Select from "react-select";
import { useUser } from "../../../features/authentication/useUser";
import supabase from "../../../services/supabase";

const options = [
  { value: "bitcoin", label: "Bitcoin" },
  { value: "usdt", label: "USDT" },
  { value: "tron", label: "Tron" },
];

function WithdrawalModal({ onClose }) {
  const [bankOption, setBankOption] = useState([""]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoadingBank, setIsLoadingBank] = useState(true);

  const { user } = useUser();

  useEffect(
    function () {
      async function getBank(id) {
        setIsLoadingBank(true);
        try {
          const { data } = await supabase
            .from("Bank")
            .select("*")
            .eq("user_id", id);

          let arr = [];

          data.map((acc) => {
            return arr.push({
              value: acc.bankName,
              label: acc.bankName,
              id: acc.id,
              fullName: acc.fullName,
              accountNumber: acc.accountNumber,
            });
          });
          if (!data) return;
          console.log(arr);
          setBankOption(arr);
        } catch (err) {
          throw new Error(err);
        } finally {
          setIsLoadingBank(false);
        }
      }
      getBank(user.id);
    },
    [user, setBankOption, selectedOption]
  );

  return (
    <Modal onClose={onClose}>
      <form>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={bankOption}
          isDisabled={isLoadingBank}
          className="mb-3 w-80"
          placeholder="Select your bank account"
        />
        <input
          className="tradeInput w-80"
          type="tel"
          placeholder="Enter amount"
          required
        />
        <div className=" w-80">
          <Button type="secondary">Withdraw</Button>
        </div>
      </form>
    </Modal>
  );
}

export default WithdrawalModal;
