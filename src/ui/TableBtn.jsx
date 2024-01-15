function TableBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-900 md:w-24 px-1 py-1 text-slate-50"
    >
      {children}
    </button>
  );
}

export default TableBtn;
