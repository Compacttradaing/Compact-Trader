import { useState } from "react";
import { IoEllipsisVertical, IoPencilOutline } from "react-icons/io5";

function OrderTableRow({ onOpenS, onOpenBal, trans, setTrantransaction }) {
  // const [transaction, setTrantransaction] = useState("");

  function onEdit(tran) {
    setTrantransaction(tran);
    onOpenS();
  }

  return (
    <div className="overflow-y-auto">
      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr]">
        <h4 className="hidden sm:block">{trans?.full_name}</h4>
        <h4>{trans?.type}</h4>
        <h4 className="hidden sm:block">{trans?.country}</h4>
        <h4 className="hidden sm:block">{trans?.created_at?.substr(0, 10)}</h4>
        <h4>{trans?.amount}</h4>
        <h4
          className={`${trans?.status === "Pending" ? "text-yellow-500" : ""} ${
            trans?.status === "Paid" ? "text-green-500" : ""
          } ${trans?.status === "Doing" ? "text-blue-500" : ""}`}
        >
          {trans?.status}
        </h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline
            className="text-lg text-indigo-900"
            role="button"
            onClick={() => onEdit(trans)}
          />
          <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
            onClick={onOpenBal}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderTableRow;
