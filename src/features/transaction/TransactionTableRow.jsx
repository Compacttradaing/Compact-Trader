import StatusBtn from "../../ui/StatusBtn";

function TransactionTableRow() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-6 text-sm items-center justify-center text-center gap-x-2.5 px-1.5 py-2.5 last:border-b last:border-slate-300">
      <h2 className="hidden md:block">TradeID</h2>
      <h2>Amazon</h2>
      <h2>02/02/21|14:20</h2>
      <h2 className="text-yellow-500">50,000</h2>
      <h2 className="text-yellow-500">Pending</h2>
      <StatusBtn />
    </div>
  );
}

export default TransactionTableRow;
