import TransactionTable from "../transaction/TransactionTable";
import ProfileDashborad from "./ProfileDashborad";
import ProfileNavLink from "./ProfileNavLink";

function ProfileSecurity() {
  return (
    <>
      <ProfileDashborad />
      <TransactionTable type="secondary">
        <ProfileNavLink>Change Password</ProfileNavLink>
        <ProfileNavLink>Change Email</ProfileNavLink>
        <ProfileNavLink>Change Phone Number</ProfileNavLink>
      </TransactionTable>
    </>
  );
}

export default ProfileSecurity;
