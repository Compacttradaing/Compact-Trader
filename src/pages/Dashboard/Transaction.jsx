import { useState } from "react";
import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTab from "../../features/transaction/TransactionTab";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";
import Status from "../../features/transaction/Status";

function Transaction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <TransactionTab />
      <TransactionTable type="secondary">
        <TransactionHeader />
        <TransactionTableRow onClick={() => setIsOpen(true)} />
      </TransactionTable>
      {isOpen && <Status onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default Transaction;
