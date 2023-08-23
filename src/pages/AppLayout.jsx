import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import Header from "../components/Header";

function AppLayout() {
  return (
    <header>
      <Header />
      <main>
        <Outlet />
      </main>
      <AppNav />
    </header>
  );
}

export default AppLayout;
