function TransactionHeader() {
  return (
    <header className="grid grid-cols-5 md:grid-cols-6 uppercase font-semibold justify-center items-center border-b text-sm md:text-lg text-center bg-slate-100 border-slate-300 gap-1 md:gap-2.5 px-2 py-2.5">
      <h2 className="capitalize hidden md:block">TradeID</h2>
      <h2>Type</h2>
      <h2>Time</h2>
      <h2>Amount</h2>
      <h2>Status</h2>
    </header>
  );
}

export default TransactionHeader;
