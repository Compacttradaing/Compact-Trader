import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      Layout
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
