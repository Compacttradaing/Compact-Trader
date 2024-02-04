import { useState } from "react";
import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTab from "../../features/transaction/TransactionTab";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";
import Status from "../../features/transaction/Status";

function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusData, setStatusData] = useState("");

  function handleClick(tran) {
    setStatusData(tran);
    setIsOpen(true);
  }

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
