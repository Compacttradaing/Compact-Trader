import ProfileDashborad from "../../features/Profile/ProfileDashborad";
import TransactionTable from "../../features/transaction/TransactionTable";

import ProfileNavLink from "../../features/Profile/ProfileNavLink";

function Profile() {
  return (
    <>
      <ProfileDashborad />

      <TransactionTable type="secondary">
        <ProfileNavLink to="settings">Security Center</ProfileNavLink>
        <ProfileNavLink>Invite Friends</ProfileNavLink>
        <ProfileNavLink>Customer Support</ProfileNavLink>
        <ProfileNavLink>About Us</ProfileNavLink>
      </TransactionTable>
    </>
  );
}
// jj
export default Profile;
