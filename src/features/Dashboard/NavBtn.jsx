import { Link } from "react-router-dom";

function NavBtn({ children, to, onClick }) {
  return (
    <Link
      to={to}
      className="bg-indigo-900 text-slate-50 mb-2 transition-all duration-300 hover:drop-shadow drop-shadow-sm sm:w-[300px] py-2 sm:h-[100px] rounded-xl flex items-center gap-4 justify-center"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default NavBtn;
