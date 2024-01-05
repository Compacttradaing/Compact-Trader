import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTab from "../../features/transaction/TransactionTab";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";

function Transaction() {
  return (
    <div>
      <TransactionTab />
      <TransactionTable type="secondary">
        <TransactionHeader />
        <TransactionTableRow />
      </TransactionTable>
    </div>
  );
}

export default Transaction;
