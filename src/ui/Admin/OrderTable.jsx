import { useGetUserTransaction } from "../../hooks/Admin/useGetUserTransaction";
import Spinner from "../Spinner";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

function OrderTable({ onOpenS, onOpenBal }) {
  const { userTransaction, isLoading } = useGetUserTransaction();

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-8 px-8 py-4 rounded-tl-md rounded-tr-md bg-white drop-shadow h-[500px]">
      <div className="flex items-center justify-between">
        <h3 className="sm:font-semibold sm:text-base text-sm">Latest Orders</h3>
        <div className="text-sm flex items-center sm:font-semibold bg-gray-100">
          <button className="orderTableBtn">All</button>
          <button className="orderTableBtn">Pending</button>
          <button className="orderTableBtn">Failed</button>
        </div>
      </div>

      {/* Table header */}
      <OrderTableHeader />
      {/* Table Rows */}
      {userTransaction.map((trans) => (
        <OrderTableRow
          key={trans.id}
          onOpenS={onOpenS}
          onOpenBal={onOpenBal}
          trans={trans}
        />
      ))}
    </div>
  );
}

export default OrderTable;
