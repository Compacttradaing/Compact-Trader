import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-white px-5 py-5 border-b grid place-items-end">
      <div className="flex items-center gap-3">
        <img
          src="/profile/uifaces.jpg"
          alt="avatar"
          className="rounded-full w-5 h-5"
        />
        <h3 className="text-sm text-slate-500 font-normal">
          Jamiu Abdulkareem
        </h3>
        <IoPersonCircleOutline
          role="button"
          className="text-xl text-indigo-900"
        />
        <IoLogOutOutline role="button" className="text-xl text-indigo-900" />
      </div>
    </header>
  );
}

export default Header;
