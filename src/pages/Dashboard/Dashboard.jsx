import { IoCardOutline, IoLogoBitcoin } from "react-icons/io5";
import BalanceBtn from "../../features/Dashboard/BalanceBtn";
import NavBtn from "../../features/Dashboard/NavBtn";
import NaVBtnText from "../../features/Dashboard/NaVBtnText";
import TransactionTable from "../../features/transaction/TransactionTable";
import TransactionHeader from "../../features/transaction/TransactionHeader";
import TransactionTableRow from "../../features/transaction/TransactionTableRow";
import { useState } from "react";
import Status from "../../features/transaction/Status";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusData, setStatusData] = useState("");

  function handleClick(tran) {
    setStatusData(tran);
    setIsOpen(true);
  }

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
        <TransactionTableRow onClick={handleClick} />
      </TransactionTable>
      {isOpen && (
        <Status statusData={statusData} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Dashboard;
