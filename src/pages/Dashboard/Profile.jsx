import ProfileDashborad from "../../features/Profile/ProfileDashborad";
import TransactionTable from "../../features/transaction/TransactionTable";

import ProfileNavLink from "../../features/Profile/ProfileNavLink";

function Profile() {
  return (
    <>
      <ProfileDashborad>
        <div className="flex items-center justify-between">
          <div className="text-slate-50 text-center">
            <p>12</p>
            <h2>Trade</h2>
          </div>
          <div className="text-center text-green-400">
            <p>10</p>
            <h2>Successful</h2>
          </div>
          <div className="text-center text-yellow-400">
            <p>2</p>
            <h2>Pending</h2>
          </div>
        </div>
        <em className="mt-5 block text-slate-50">Email: olajohn@email.com</em>
      </ProfileDashborad>
      <TransactionTable type="secondary">
        <ProfileNavLink>Security Center</ProfileNavLink>
        <ProfileNavLink>Invite Friends</ProfileNavLink>
        <ProfileNavLink>Customer Support</ProfileNavLink>
        <ProfileNavLink>About Us</ProfileNavLink>
      </TransactionTable>
    </>
  );
}

export default Profile;
