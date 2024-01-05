import { Link } from "react-router-dom";

function TransactionTab() {
  return (
    <div className="flex md:gap-80 justify-center mt-5 gap-10 text-lg text-slate-900 font-semibold items-center">
      <button className="transition-all duration-200 hover:text-indigo-900 visited:text-indigo-900 hover:border-indigo-900 hover:border-b-2 visited:border-indigo-900 visited:border-b-2 md:w-80">
        Gift cards/Bitcoin
      </button>
      <button className="transition-all duration-200 hover:text-indigo-900 visited:text-indigo-900 hover:border-indigo-900 hover:border-b-2 visited:border-indigo-900 visited:border-b-2 md:w-80">
        Withdrawals
      </button>
    </div>
  );
}

export default TransactionTab;
