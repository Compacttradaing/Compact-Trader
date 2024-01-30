import { IoEllipsisVertical, IoPencilOutline } from "react-icons/io5";

function OrderTableRow() {
  return (
    <div className="overflow-y-auto">
      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr]">
        <h4 className="hidden sm:block">Jamiu Abdulkareem</h4>
        <h4>Amazon</h4>
        <h4 className="hidden sm:block">United State</h4>
        <h4 className="hidden sm:block">02-01-2024</h4>
        <h4>$50</h4>
        <h4 className="text-yellow-500">Pending</h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline className="text-lg text-indigo-900" role="button" />
          <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
          />
        </div>
      </div>

      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr]">
        <h4 className="hidden sm:block">Jamiu Abdulkareem</h4>
        <h4>Amazon</h4>
        <h4 className="hidden sm:block">United State</h4>
        <h4 className="hidden sm:block">02-01-2024</h4>
        <h4>$50</h4>
        <h4 className="text-yellow-500">Pending</h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline className="text-lg text-indigo-900" role="button" />
          <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
          />
        </div>
      </div>

      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr]">
        <h4 className="hidden sm:block">Jamiu Abdulkareem</h4>
        <h4>Amazon</h4>
        <h4 className="hidden sm:block">United State</h4>
        <h4 className="hidden sm:block">02-01-2024</h4>
        <h4>$50</h4>
        <h4 className="text-yellow-500">Pending</h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline className="text-lg text-indigo-900" role="button" />
          <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
          />
        </div>
      </div>

      <div className="px-5 py-3 rounded-tl-md text-sm text-slate-500 font-medium border-b-gray-100 border-b grid grid-cols-[1fr_1fr_1fr_1fr] gap-3 sm:grid-cols-[17rem_1fr_1fr_1fr_1fr_1fr_1fr]">
        <h4 className="hidden sm:block">Jamiu Abdulkareem</h4>
        <h4>Amazon</h4>
        <h4 className="hidden sm:block">United State</h4>
        <h4 className="hidden sm:block">02-01-2024</h4>
        <h4>$50</h4>
        <h4 className="text-yellow-500">Pending</h4>
        <div className="flex items-center gap-2">
          <IoPencilOutline className="text-lg text-indigo-900" role="button" />
          <IoEllipsisVertical
            className="text-lg text-indigo-900"
            role="button"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderTableRow;
