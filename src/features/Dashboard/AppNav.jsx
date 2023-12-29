import {
  IoHomeOutline,
  IoPersonOutline,
  IoPieChartOutline,
  IoWalletOutline,
} from "react-icons/io5";

import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="fixed left-0 right-0 px-2 sm:px-20 py-3 bottom-0 bg-indigo-100 drop-shadow-md ">
      <ul className="flex items-center justify-between">
        <NavLink
          to=""
          className="grid place-items-center transition-all duration-300 active:text-indigo-950 visited:text-indigo-950 hover:text-indigo-900 text-slate-900"
        >
          <IoHomeOutline className="text-2xl" />
          <span className="text-sm font-medium">Home</span>
        </NavLink>
        <NavLink
          to="wallet"
          className="grid place-items-center transition-all duration-300 visited:text-indigo-950 hover:text-indigo-900 text-slate-900"
        >
          <IoWalletOutline className="text-2xl" />
          <span className="text-sm font-medium">Wallet</span>
        </NavLink>
        <NavLink
          to="transaction"
          className="grid place-items-center transition-all duration-300 active:text-indigo-900 visited:text-indigo-900 hover:text-indigo-900 text-slate-900"
        >
          <IoPieChartOutline className="text-2xl" />
          <span className="text-sm font-medium">Transaction</span>
        </NavLink>
        <NavLink
          to="profile"
          className="grid place-items-center transition-all duration-300 active:text-indigo-900 visited:text-indigo-900 hover:text-indigo-900 text-slate-900"
        >
          <IoPersonOutline className="text-2xl" />
          <span className="text-sm font-medium">Profile</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
