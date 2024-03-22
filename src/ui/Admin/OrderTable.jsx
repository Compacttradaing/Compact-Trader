import { useEffect, useState } from "react";
import { useGetUserTransaction } from "../../hooks/Admin/useGetUserTransaction";
import Spinner from "../Spinner";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";
import { useSearchParams } from "react-router-dom";

function OrderTable({ onOpenS, onOpenBal, setTransaction }) {
  const [flirterValue, setFlirterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [transaction, setTransactions] = useState([]);
  const { userTransaction, isLoading } = useGetUserTransaction();

  useEffect(
    function () {
      searchParams.set("status", flirterValue || "all");
      setSearchParams(searchParams);
    },
    [flirterValue, searchParams, setSearchParams]
  );

  const statusValue = searchParams.get("status") || "all";

  // Filter data that was is status === filter button value
  useEffect(
    function () {
      const statusData = userTransaction?.filter(
        (item) => item.status === statusValue
      );

      if (statusValue === "all") {
        setTransactions(userTransaction);
      } else {
        setTransactions(statusData);
      }
    },
    [setTransaction, statusValue, userTransaction]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-8 px-8 py-4 rounded-tl-md overflow-y-auto rounded-tr-md bg-white drop-shadow h-[500px]">
      <div className="flex items-center justify-between">
        <h3 className="sm:font-semibold sm:text-base text-sm">Latest Orders</h3>
        <div className="text-sm flex items-center sm:font-semibold bg-gray-100">
          <button
            className="orderTableBtn"
            value="all"
            onClick={(e) => setFlirterValue(e.target.value)}
          >
            All
          </button>
          <button
            className="orderTableBtn"
            value="Pending"
            onClick={(e) => setFlirterValue(e.target.value)}
          >
            Pending
          </button>
          <button
            className="orderTableBtn"
            value="Failed"
            onClick={(e) => setFlirterValue(e.target.value)}
          >
            Failed
          </button>
        </div>
      </div>

      {/* Table header */}
      <OrderTableHeader />
      {/* Table Rows */}
      {transaction?.map((trans) => (
        <OrderTableRow
          key={trans.id}
          onOpenS={onOpenS}
          onOpenBal={onOpenBal}
          trans={trans}
          setTrantransaction={setTransaction}
        />
      ))}
    </div>
  );
}

export default OrderTable;
