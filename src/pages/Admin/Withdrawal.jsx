import WithdrawalTableHeader from "../../ui/Admin/WithdrawalTableHeader";
import WithdrawalTableRow from "../../ui/Admin/WithdrawalTableRow";

function Withdrawal() {
  return (
    <div className="mt-8 px-8 py-4 rounded-tl-md overflow-y-auto rounded-tr-md bg-white drop-shadow h-[550px]">
      <div className="flex items-center justify-between">
        <h3 className="sm:font-semibold sm:text-base text-sm">
          Latest Withdrawal
        </h3>
        <div className="text-sm flex items-center sm:font-semibold bg-gray-100">
          <button className="orderTableBtn" value="all">
            All
          </button>
          <button className="orderTableBtn" value="Pending">
            Pending
          </button>
          <button className="orderTableBtn" value="Failed">
            Failed
          </button>
        </div>
      </div>
      <WithdrawalTableHeader />
      <WithdrawalTableRow />
    </div>
  );
}

export default Withdrawal;
