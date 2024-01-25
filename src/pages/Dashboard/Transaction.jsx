import { useEffect, useState } from "react";
import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTab from "../../features/transaction/TransactionTab";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";
import Status from "../../features/transaction/Status";
import supabase from "../../services/supabase";

function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [tranID, setTranID] = useState("");
  const [statusData, setStatusData] = useState([]);

  function handleClick(tran) {
    setTranID(tran.id);
    setIsOpen(true);
  }

  useEffect(
    function () {
      async function getStatus(id) {
        const { data, error } = await supabase
          .from("Transaction")
          .select("*")
          .eq("id", id);

        if (error) throw new Error(error.message);

        if (!data) return;
        setStatusData(data);
      }
      if (!tranID) return;
      getStatus(tranID);
    },
    [tranID]
  );

  return (
    <div>
      <TransactionTab />
      <TransactionTable type="secondary">
        <TransactionHeader />
        <TransactionTableRow onClick={handleClick} />
      </TransactionTable>
      {isOpen && (
        <Status statusData={statusData} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Transaction;
