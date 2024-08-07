import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Wallet from "./Pages/Wallet/Wallet";
import Transaction from "./Pages/Transaction/Transaction";
import Budget from "./Pages/Bubget/Budget";
import Error404 from "./Pages/Error/404";
import Login from "./Pages/Authen/Login";
import Signup from "./Pages/Authen/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ForgotPassword/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/budgets" element={<Budget />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
