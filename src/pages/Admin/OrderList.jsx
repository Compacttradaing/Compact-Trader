import { useState } from "react";
import OrderTable from "../../ui/Admin/OrderTable";
import UpdateStatusModal from "../../features/Admin/UpdateStatusModal";
import UpdateBalModal from "../../features/Admin/UpdateBalModal";

function OrderList() {
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenBal, setIsOpenBal] = useState(false);
  const [transaction, setTrantransaction] = useState("");

  return (
    <div>
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

export default OrderList;
