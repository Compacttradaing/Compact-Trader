import { IoCardOutline, IoLogoBitcoin } from "react-icons/io5";
import BalanceBtn from "../../features/Dashboard/BalanceBtn";
import NavBtn from "../../features/Dashboard/NavBtn";
import NaVBtnText from "../../features/Dashboard/NaVBtnText";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";

function Dashboard() {
  return (
    <>
      <div className="sm:flex mt-5 px-3 flex-row items-center justify-center md:justify-between sm:mt-10">
        <BalanceBtn />
        <NavBtn to="sell-gift-card">
          <NaVBtnText>Sell Gift Card</NaVBtnText>
          <div className="NavBtnBg bg-green-400">
            <IoCardOutline className="text-xl" />
          </div>
        </NavBtn>
        <NavBtn to="sell-gift-crypto">
          <NaVBtnText>Sell Bitcoin</NaVBtnText>
          <div className="NavBtnBg bg-yellow-400">
            <IoLogoBitcoin className="text-xl" />
          </div>
        </NavBtn>
        {/* </div> */}
        {/* </div> */}
      </div>
      <TransactionTable type="primary">
        <TransactionHeader />
        <TransactionTableRow />
      </TransactionTable>
    </>
  );
}

export default Dashboard;
