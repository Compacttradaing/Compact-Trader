import { Outlet } from "react-router-dom";
import Header from "../features/Dashboard/Header";
import AppNav from "../features/Dashboard/AppNav";

function AppLayout() {
  return (
    <div className="bg-slate-50 w-screen h-screen px-2 sm:px-20 pt-5">
      <Header />
      <main>
        <Outlet />
      </main>
      <AppNav />
    </div>
  );
}

export default AppLayout;
