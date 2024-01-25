import currency from "currency.js";
import { useGetTransaction } from "../../hooks/useGetTransaction";
import TableBtn from "../../ui/TableBtn";
import XSpinner from "../../ui/XSpinner";

function TransactionTableRow({ onClick }) {
  const { transaction, isLoadingTransaction } = useGetTransaction();

  if (isLoadingTransaction) return <XSpinner />;

  if (!transaction) return <h1>No transaction history</h1>;

  return (
    <div>
      {transaction.map((tran) => (
        <div
          key={tran.id}
          className="grid grid-cols-5 md:grid-cols-6 text-sm items-center justify-center text-center gap-x-2.5 px-1.5 py-2.5 last:border-b last:border-slate-300"
        >
          <h2 className="hidden md:block">ct{tran.id.substr(0, 8)}</h2>
          <h2>{tran.type}</h2>
          <h2>{tran.created_at.substr(11, 5)}</h2>
          <h2 className="text-yellow-500">
            {currency(tran.amount, { separator: ",", symbol: " " }).format()}
          </h2>
          <h2 className="text-yellow-500">{tran.status}</h2>
          <TableBtn
            onClick={() => {
              onClick(tran);
            }}
          >
            View
          </TableBtn>
        </div>
      ))}
    </div>
  );
}

export default TransactionTableRow;
