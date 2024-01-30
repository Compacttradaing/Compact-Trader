import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AdminLayout() {
  return (
    <div className="grid grid-cols-[2rem_1fr] sm:grid-cols-[15rem_1fr] grid-rows-[auto_1fr] h-screen bg-gradient-to-r from-slate-100 to-gray-100">
      <Header />
      <SideBar />
      <main className="px-2 py-4 overflow-x-scroll">
        <div className="max-w-[1200px] my-0 mx-auto flex flex-col gap-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
