import { IoCloseOutline } from "react-icons/io5";
import { useLogOut } from "../authentication/useLogOut";
import { useUser } from "../authentication/useUser";

function Header() {
  // const [firstName, setFirstName] = useState();

  const { logout, isLoading } = useLogOut();
  const { user } = useUser();
  const firstName = user?.user_metadata?.firstName;

  return (
    <header className="flex items-center justify-between">
      <h1 className="font-semibold text-slate-900">Welcome, {firstName}</h1>
      <button
        disabled={isLoading}
        onClick={logout}
        className="flex items-center justify-center gap-1"
      >
        <span className="text-sm text-slate-900">Sign Out</span>{" "}
        <IoCloseOutline className="text-red-500 text-xl" />
      </button>
    </header>
  );
}

export default Header;
