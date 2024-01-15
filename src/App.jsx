import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wallet from "./pages/Dashboard/Wallet";
import Transaction from "./pages/Dashboard/Transaction";
import Profile from "./pages/Dashboard/Profile";
import TradeGiftCard from "./pages/Dashboard/TradeGiftCard";
import TradeCrypto from "./pages/Dashboard/TradeCrypto";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/Homepage";
import ProfileSecurity from "./features/Profile/ProfileSecurity";

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/settings" element={<ProfileSecurity />} />

            <Route path="sell-gift-card" element={<TradeGiftCard />} />
            <Route path="sell-gift-crypto" element={<TradeCrypto />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
