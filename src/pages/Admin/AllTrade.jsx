import { IoAddCircleOutline } from "react-icons/io5";
import TradeTableHead from "../../ui/Admin/TradeTableHead";
import TradeTableRow from "../../ui/Admin/TradeTableRow";
import { useGiftCards } from "../Dashboard/useGiftCards";
import Spinner from "../../ui/Spinner";

function AllTrade() {
  const { giftcards, isLoading } = useGiftCards();

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-5 px-8 py-4 rounded-tl-md rounded-tr-md bg-white drop-shadow h-[560px]">
      <div className="flex items-center justify-between">
        <h3 className="sm:font-semibold sm:text-base text-sm">Latest Orders</h3>
        <div className="text-sm flex gap-2 items-center sm:font-medium">
          <select className="border-slate-500 border px-0.5 sm:px-4 sm:py-1.5 rounded-sm focus:outline-none">
            <option value="All">All</option>
            <option value="USA">USA</option>
            <option value="USA">USA</option>
          </select>
          <button className="bg-indigo-900 text-slate-50 px-0.5 sm:px-4 sm:py-1.5 transition-all duration-300 focus:outline-none focus:bg-indigo-900 focus:text-slate-50 rounded-sm flex items-center gap-1">
            <IoAddCircleOutline className="text-xl text-white hidden sm:block" />
            <span>Add New Offer</span>
          </button>
        </div>
      </div>

      <TradeTableHead />
      {giftcards.map((offer) => (
        <TradeTableRow key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default AllTrade;
