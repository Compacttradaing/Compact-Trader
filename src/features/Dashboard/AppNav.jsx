import {
  IoHomeOutline,
  IoPersonOutline,
  IoPieChartOutline,
  IoWalletOutline,
} from "react-icons/io5";

import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="fixed bottom-0 bg-slate-400">
      <ul>
        <NavLink to="home">
          <IoHomeOutline />
          <span>Home</span>
        </NavLink>
        <NavLink to="wallet">
          <IoWalletOutline />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="transaction">
          <IoPieChartOutline />
          <span>Transaction</span>
        </NavLink>
        <NavLink to="profile">
          <IoPersonOutline />
          <span>Profile</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
