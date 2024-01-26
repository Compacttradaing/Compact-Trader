import { useEffect, useState } from "react";
import Modal from "../../ui/Modal";

function Status({ onClose, statusData }) {
  const [status, setStaus] = useState([]);
  useEffect(
    function () {
      setStaus(statusData[0]);
      if (!status) return;
      console.log(status);
    },
    [status, statusData]
  );

  return (
    <Modal onClose={onClose}>
      <div className="w-80">
        <div className="border-b border-slate-300 pb-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Order ID:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              CT{status?.id?.substr(0, 8)}
            </span>
          </p>
          <p className="text-sm font-bold mb-2 flex items-center justify-between">
            Date:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              {status?.created_at?.substr(0, 10)}
            </span>
          </p>
          <p className="text-sm font-bold flex items-center justify-between">
            Amount:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              {status?.amount}
            </span>
          </p>
        </div>
        <div className="mt-2 border-b border-slate-300 pb-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Reply images:
          </p>
          <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-52 mt-2">
            <div className="w-[50px] h-[50px] mr-1 relative mb-2">
              <img src={status?.image} className="w-full h-full rounded-md" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Status message:
          </p>
          <p className="text-slate-500 text-sm font-normal">hi</p>
        </div>
      </div>
    </Modal>
  );
}

export default Status;
