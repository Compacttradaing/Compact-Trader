function WalletTableHeader() {
  return (
    <header className="grid grid-cols-4 md:grid-cols-4 uppercase font-semibold justify-center items-center border-b text-sm md:text-lg text-center bg-slate-100 border-slate-300 gap-1 md:gap-2.5 px-2 py-2.5">
      <h2>Bank</h2>
      <h2>Name</h2>
      <h2>Account number</h2>
    </header>
  );
}

export default WalletTableHeader;
