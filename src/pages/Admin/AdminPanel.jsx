import { IoBarChartOutline } from "react-icons/io5";
import OrderTable from "../../ui/Admin/OrderTable";
import { useState } from "react";
import UpdateStatusModal from "../../features/Admin/UpdateStatusModal";
import UpdateBalModal from "../../features/Admin/UpdateBalModal";

function AdminPanel() {
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenBal, setIsOpenBal] = useState(false);
  const [transaction, setTrantransaction] = useState("");

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-4 items-center gap-3">
        <li className="column">
          <h3 className="font-semibold text-slate-900 text-sm">Total Trades</h3>
          <div className="text-lg font-semibold flex items-center gap-2 mt-4">
            <div className="bg-indigo-900 text-slate-50 px-2 py-2 rounded-md">
              <IoBarChartOutline />
            </div>
            <span>10M+</span>
          </div>
          <p className="mt-5 grid place-items-end">Oct 2024</p>
        </li>
        <li className="column">
          <h3 className="font-semibold text-slate-900 text-sm">
            Active Trades
          </h3>
          <div className="text-lg font-semibold flex items-center gap-2 mt-4">
            <div className="bg-indigo-900 text-slate-50 px-2 py-2 rounded-md">
              <IoBarChartOutline />
            </div>
            <span>10M+</span>
          </div>
          <p className="mt-5 grid place-items-end">Oct 2024</p>
        </li>
        <li className="column">
          <h3 className="font-semibold text-slate-900 text-sm">
            Completed Trades
          </h3>
          <div className="text-lg font-semibold flex items-center gap-2 mt-4">
            <div className="bg-indigo-900 text-slate-50 px-2 py-2 rounded-md">
              <IoBarChartOutline />
            </div>
            <span>10M+</span>
          </div>
          <p className="mt-5 grid place-items-end">Oct 2024</p>
        </li>
        <li className="column">
          <h3 className="font-semibold text-slate-900 text-sm">
            Failed Trades
          </h3>
          <div className="text-lg font-semibold flex items-center gap-2 mt-4">
            <div className="bg-indigo-900 text-slate-50 px-2 py-2 rounded-md">
              <IoBarChartOutline />
            </div>
            <span>10M+</span>
          </div>
          <p className="mt-5 grid place-items-end">Oct 2024</p>
        </li>
      </ul>
      <OrderTable
        onOpenS={() => setIsOpenS(true)}
        onOpenBal={() => setIsOpenBal(true)}
        setTransaction={setTrantransaction}
      />
      {isOpenS && (
        <UpdateStatusModal
          transaction={transaction}
          onClose={() => setIsOpenS(false)}
        />
      )}
      {isOpenBal && <UpdateBalModal onClose={() => setIsOpenBal(false)} />}
    </div>
  );
}

export default AdminPanel;
