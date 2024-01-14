function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-slate-900/50 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-md rounded-md py-14 px-20 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}

export default Modal;
