import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Wallet from "./Pages/Wallet/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
