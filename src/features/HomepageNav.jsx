import { Link } from "react-router-dom";

function HomepageNav() {
  return (
    <div className="fixed top-0 z-10 w-screen bg-white drop-shadow-sm">
      <nav className="z-12 flex items-center justify-between py-5 px-2 sm:px-10">
        <span className="text-xl font-bold text-slate-900">Compact Trader</span>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li className="text-sm text-slate-500 font-medium">
              <Link to="/login">Sign in</Link>
            </li>
            <li className="text-sm font-medium text-slate-500">
              <Link to="/register">Get started</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
}

export default HomepageNav;
