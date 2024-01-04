import { IoBusinessSharp, IoCashOutline } from "react-icons/io5";
import BalanceBtn from "../../features/Dashboard/BalanceBtn";
import NaVBtnText from "../../features/Dashboard/NaVBtnText";
import NavBtn from "../../features/Dashboard/NavBtn";

function Wallet() {
  return (
    <div>
      <div className="sm:flex mt-5  grid gap-2 items-center justify-center md:justify-between sm:mt-10">
        <BalanceBtn />
        <NavBtn>
          <NaVBtnText>Withdraw Fund</NaVBtnText>
          <div className="NavBtnBg bg-green-400">
            <IoCashOutline className="text-xl" />
          </div>
        </NavBtn>
        <NavBtn>
          <NaVBtnText>Add Bank Account</NaVBtnText>
          <div className="NavBtnBg bg-yellow-400">
            <IoBusinessSharp className="text-xl" />
          </div>
        </NavBtn>
      </div>
    </div>
  );
}

export default Wallet;
