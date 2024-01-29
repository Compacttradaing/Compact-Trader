import { useState } from "react";
// import Modal from "../../ui/Modal";
import TransactionTable from "../transaction/TransactionTable";
import ProfileDashborad from "./ProfileDashborad";
import ProfileNavLink from "./ProfileNavLink";
import UpdatePasswordModal from "./UpdatePasswordModal";
// import UpdateEmailModal from "./UpdateEmailModal";
import UpdateNumModal from "./UpdateNumModal";

function ProfileSecurity() {
  const [isOpenPass, setIsOpenPass] = useState(false);
  // const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenNum, setIsOpenNum] = useState(false);

  return (
    <>
      <ProfileDashborad />
      <TransactionTable type="secondary">
        <ProfileNavLink onClick={() => setIsOpenPass(true)}>
          Change Email & Password
        </ProfileNavLink>
        {/* <ProfileNavLink onClick={() => setIsOpenEmail(true)}>
          Change Email
        </ProfileNavLink> */}
        <ProfileNavLink onClick={() => setIsOpenNum(true)}>
          Change Phone Number
        </ProfileNavLink>
      </TransactionTable>
      {isOpenPass && (
        <UpdatePasswordModal onClose={() => setIsOpenPass(false)} />
      )}
      {/* {isOpenEmail && (
        <UpdateEmailModal onClose={() => setIsOpenEmail(false)} />
      )} */}
      {isOpenNum && <UpdateNumModal onClose={() => setIsOpenNum(false)} />}
    </>
  );
}

export default ProfileSecurity;
