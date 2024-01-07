import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProfileNavLink({ children }) {
  return (
    <Link className="flex items-center px-10 justify-between py-2.5 border-b">
      <span>{children}</span>
      <IoChevronForwardOutline />
    </Link>
  );
}

export default ProfileNavLink;
