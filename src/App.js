import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Wallet from "./Pages/Wallet/Wallet";
import Transaction from "./Pages/Transaction/Transaction";
import Budget from "./Pages/Bubget/Budget";
import Error404 from "./Pages/Error/404";
import Login from "./Pages/Authen/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/budgets" element={<Budget />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
