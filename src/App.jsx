import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
