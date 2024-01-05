function TransactionTableRow() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-6 text-sm items-center justify-center text-center gap-x-2.5 px-1.5 py-2.5 last:border-b last:border-slate-300">
      <h2 className="hidden md:block">TradeID</h2>
      <h2>Type</h2>
      <h2>Time</h2>
      <h2>Amount</h2>
      <h2>Status</h2>
      {/* <h2>TradeID</h2> */}
    </div>
  );
}

export default TransactionTableRow;
