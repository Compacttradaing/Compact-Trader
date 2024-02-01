import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";

function TradeTableRow({ onOpenOffer, offer }) {
  return (
    <div className="overflow-y-auto">
      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
        <h4>{offer.country_id}</h4>
        <h4>{offer.name}</h4>
        <h4>{offer.rate}</h4>
        <h4 className="hidden sm:block">{offer?.created_at?.substr(11, 5)}</h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline
            className="text-lg text-indigo-900"
            role="button"
            onClick={onOpenOffer}
          />
          <IoTrashOutline className="text-lg text-red-500" role="button" />
          {/* <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
            onClick={onOpenBal}
          />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default TradeTableRow;
