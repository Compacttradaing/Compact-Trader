function WithdrawalTableHeader() {
  return (
    <div className="mt-5 bg-gray-100 px-5 py-2 rounded-tl-md text-sm text-slate-500 font-medium rounded-tr-md grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-2">
      <h4>Full Name</h4>
      <h4>Bank Name</h4>
      <h4>Account Number</h4>
      <h4>Amount</h4>
      <h4>Status</h4>
    </div>
  );
}

export default WithdrawalTableHeader;
