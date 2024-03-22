// import { QueryClient, QueryClientProvider } from "react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wallet from "./pages/Dashboard/Wallet";
import Transaction from "./pages/Dashboard/Transaction";
import Profile from "./pages/Dashboard/Profile";
import TradeGiftCard from "./pages/Dashboard/TradeGiftCard";
import TradeCrypto from "./pages/Dashboard/TradeCrypto";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import ProfileSecurity from "./features/Profile/ProfileSecurity";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import Register from "./features/authentication/Register";
import Login from "./features/authentication/Login";
import ForgotPassword from "./features/authentication/ForgotPassword";
import ResetPassword from "./features/authentication/ResetPassword";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminLayout from "./ui/Admin/AdminLayout";
import AdminLogin from "./features/Admin/authentication/AdminLogin";
import AllTrade from "./pages/Admin/AllTrade";
import OrderList from "./pages/Admin/OrderList";
import Withdrawal from "./pages/Admin/Withdrawal";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />

            <Route
              path="/app"
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/settings" element={<ProfileSecurity />} />

              <Route path="sell-gift-card" element={<TradeGiftCard />} />
              <Route path="sell-gift-crypto" element={<TradeCrypto />} />
            </Route>

            {/* Admin page */}
            <Route path="/admin">
              <Route path="panel" element={<AdminLayout />}>
                <Route index element={<AdminPanel />} />
                <Route path="trade" element={<AllTrade />} />
                <Route path="orders" element={<OrderList />} />
                <Route path="withdrawals" element={<Withdrawal />} />
              </Route>
              <Route path="login" element={<AdminLogin />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
