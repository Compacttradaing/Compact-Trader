function TradeTableHead() {
  return (
    <div className="mt-5 bg-gray-100 px-5 py-2 rounded-tl-md text-sm text-slate-500 font-medium rounded-tr-md grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-2">
      <h4>Country</h4>
      <h4>Type</h4>
      <h4>Rate</h4>
      <h4>Date</h4>
      <h4></h4>
    </div>
  );
}

export default TradeTableHead;
