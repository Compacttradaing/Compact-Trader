import { IoCloseOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-semibold text-slate-900">Welcome, John</h1>
      <button className="flex items-center justify-center gap-1">
        <span className="text-sm text-slate-900">Sign Out</span>{" "}
        <IoCloseOutline className="text-red-500 text-xl" />
      </button>
    </header>
  );
}

export default Header;
