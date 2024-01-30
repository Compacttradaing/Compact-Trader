import { NavLink } from "react-router-dom";
import {
  IoAlbumsOutline,
  IoCartOutline,
  IoHomeOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink to="/admin/panel" className="navLink">
            <IoHomeOutline />
            <span className="hidden sm:block">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="trade" className="navLink">
            <IoAlbumsOutline />
            <span className="hidden sm:block">All Trades</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="orders" className="navLink">
            <IoCartOutline />
            <span className="hidden sm:block">Order Lists</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="withdrawals" className="navLink">
            <IoPaperPlaneOutline />
            <span className="hidden sm:block">Withdrawals</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
