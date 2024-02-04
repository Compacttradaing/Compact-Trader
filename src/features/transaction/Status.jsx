import Modal from "../../ui/Modal";

function Status({ onClose, statusData }) {
  return (
    <Modal onClose={onClose}>
      <div className="w-80">
        <div className="border-b border-slate-300 pb-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Order ID:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              CT{statusData?.id?.substr(0, 8)}
            </span>
          </p>
          <p className="text-sm font-bold mb-2 flex items-center justify-between">
            Date:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              {statusData?.created_at?.substr(0, 10)}
            </span>
          </p>
          <p className="text-sm font-bold flex items-center justify-between">
            Amount:{" "}
            <span className="ml-10 text-sm font-normal text-slate-500">
              {statusData?.amount}
            </span>
          </p>
        </div>
        <div className="mt-2 border-b border-slate-300 pb-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Reply images:
          </p>
          {statusData?.replyImage_url?.map((img) => (
            <img
              className="w-[50px] h-[50px] rounded-md"
              key={img}
              src={img}
              alt="reply image"
              loading="lazy"
            />
          ))}
        </div>
        <div className="mt-2">
          <p className="text-sm font-bold flex mb-2 items-center justify-between">
            Reply message:
          </p>
          <p className="text-slate-500 text-sm font-normal">
            {statusData?.reply}
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default Status;
