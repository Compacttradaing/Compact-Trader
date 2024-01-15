import Modal from "../../ui/Modal";

function Status({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="border-b border-slate-300 pb-2">
        <p className="text-sm font-bold flex mb-2 items-center justify-between">
          Order ID:{" "}
          <span className="ml-10 text-sm font-normal text-slate-500">
            7773782782823
          </span>
        </p>
        <p className="text-sm font-bold mb-2 flex items-center justify-between">
          Time:{" "}
          <span className="ml-10 text-sm font-normal text-slate-500">
            7773782782823
          </span>
        </p>
        <p className="text-sm font-bold flex items-center justify-between">
          Amount:{" "}
          <span className="ml-10 text-sm font-normal text-slate-500">
            7773782782823
          </span>
        </p>
      </div>
      <div className="mt-2 border-b border-slate-300 pb-2">
        <p className="text-sm font-bold flex mb-2 items-center justify-between">
          Reply images:
        </p>
        <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-52 mt-2">
          <div className="w-[50px] h-[50px] mr-1 relative mb-2">
            <img
              src="/assets/images/backgroundPatern.png"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-bold flex mb-2 items-center justify-between">
          Status message:
        </p>
        <p className="text-slate-500 text-sm font-normal">hi</p>
      </div>
    </Modal>
  );
}

export default Status;
