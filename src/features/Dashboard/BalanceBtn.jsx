import { IoEyeOutline, IoSendOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useBalance } from "./useBalance";

function BalanceBtn() {
  const { isLoading, balance } = useBalance();

  return (
    <div className="flex items-center justify-between mb-2 sm:mb-0 rounded-xl sm:gap-10 bg-white drop-shadow-sm sm:w-[300px] h-[100px] p-5">
      <div>
        <h3 className="text-sm text-slate-600">Account Balance</h3>
        <div className="flex items-center gap-2">
          <span className="font-variant-numeric: tabular-nums text-sm font-bold text-slate-900">
            {isLoading ? "***" : `${balance}.00`}
          </span>
          <IoEyeOutline />
        </div>
      </div>
      <Link className="bg-indigo-900 py-2 px-2 rounded-full drop-shadow-md hover:-translate-y-1 transition-all duration-300 hover:drop-shadow">
        <IoSendOutline className=" text-slate-50 text-xl h-5 w-5 " />
      </Link>
    </div>
  );
}

export default BalanceBtn;
