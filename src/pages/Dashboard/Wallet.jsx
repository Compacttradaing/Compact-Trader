import { IoBusinessSharp, IoCashOutline } from "react-icons/io5";
import BalanceBtn from "../../features/Dashboard/BalanceBtn";
import NaVBtnText from "../../features/Dashboard/NaVBtnText";
import NavBtn from "../../features/Dashboard/NavBtn";
import TransactionTable from "../../features/transaction/TransactionTable";

import WalletTableHeader from "../../features/Wallet/WalletTableHeader";
import WalletTableRow from "../../features/Wallet/WalletTableRow";
import { useState } from "react";
import WithdrawalModal from "./Wallet/WithdrawalModal";
import AddBankModal from "./Wallet/AddBankModal";

function Wallet() {
  const [isOpen, setIsopen] = useState(false);
  const [isOpenBank, setIsopenBank] = useState(false);

  return (
    <>
      <div className="sm:flex mt-5 gap-2 items-center justify-center md:justify-between sm:mt-10">
        <BalanceBtn />
        <NavBtn onClick={() => setIsopen(true)}>
          <NaVBtnText>Withdraw Fund</NaVBtnText>
          <div className="NavBtnBg bg-green-400">
            <IoCashOutline className="text-xl" />
          </div>
        </NavBtn>
        <NavBtn onClick={() => setIsopenBank(true)}>
          <NaVBtnText>Add Bank Account</NaVBtnText>
          <div className="NavBtnBg bg-yellow-400">
            <IoBusinessSharp className="text-xl" />
          </div>
        </NavBtn>
      </div>

      <TransactionTable type="secondary">
        <WalletTableHeader />
        <WalletTableRow />
      </TransactionTable>
      {isOpen && <WithdrawalModal onClose={() => setIsopen(false)} />}
      {isOpenBank && <AddBankModal onClose={() => setIsopenBank(false)} />}
    </>
  );
}

export default Wallet;
