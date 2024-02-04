import { HiXMark } from "react-icons/hi2";

function Modal({ children, onClose }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-slate-900/50 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="fixed top-[50%] overflow-y-auto left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-md rounded-md py-14 sm:px-20 transition-all duration-300 px-5">
        <button onClick={onClose} className="absolute top-5 right-6 ">
          <HiXMark className="text-2xl text-slate-900 transition-all duration-300 hover:text-red-500" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
