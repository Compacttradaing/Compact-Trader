import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="bg-white px-1 sm:px-8 py-4 border-r row-span-full flex items-center flex-col gap-10">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default SideBar;
