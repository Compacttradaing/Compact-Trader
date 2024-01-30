function OrderTableHeader() {
  return (
    <div className="mt-5 bg-gray-100 px-5 py-2 rounded-tl-md text-sm text-slate-500 font-medium rounded-tr-md grid grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
      <h4 className="hidden sm:block">Full name</h4>
      <h4>Type</h4>
      <h4 className="hidden sm:block">Country</h4>
      <h4 className="hidden sm:block">Date</h4>
      <h4>Amount</h4>
      <h4>Status</h4>
      <h4></h4>
    </div>
  );
}

export default OrderTableHeader;
