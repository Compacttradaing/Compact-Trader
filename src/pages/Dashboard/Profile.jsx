import ProfileDashborad from "../../features/Profile/ProfileDashborad";
import TransactionTable from "../../features/transaction/TransactionTable";

import ProfileNavLink from "../../features/Profile/ProfileNavLink";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CustomerSup from "../../features/Profile/CustomerSup";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAb, setIsOpenAb] = useState(false);

  return (
    <>
      <ProfileDashborad />

      <TransactionTable type="secondary">
        <ProfileNavLink to="settings">Security Center</ProfileNavLink>
        <ProfileNavLink>Invite Friends</ProfileNavLink>
        <ProfileNavLink onClick={() => setIsOpen(true)}>
          Customer Support
        </ProfileNavLink>
        <ProfileNavLink onClick={() => setIsOpenAb(true)}>
          About Us
        </ProfileNavLink>
      </TransactionTable>
      {isOpen && <CustomerSup onClose={() => setIsOpen(false)} />}
      {isOpenAb && <Modal onClose={() => setIsOpenAb(false)}>About</Modal>}
    </>
  );
}

export default Profile;
