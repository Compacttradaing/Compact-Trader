import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import WithdrawFund from "./components/WithdrawFund";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="wallet/withdraw-funds" element={<WithdrawFund />} />

          <Route path="transaction" element={<Transaction />} />
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
