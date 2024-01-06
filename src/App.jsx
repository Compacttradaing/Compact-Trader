import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Wallet from "./pages/Dashboard/Wallet";
import Transaction from "./pages/Dashboard/Transaction";
import Profile from "./pages/Dashboard/Profile";

function App() {
  const queryClient = new QueryClient();

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
