function Modal({ children }) {
  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-900/30">
      <div className="my-[15%] z-40 mx-auto w-[80%] bg-white p-10 rounded-md">
        {children}
      </div>
    </div>
  );
}

export default Modal;
