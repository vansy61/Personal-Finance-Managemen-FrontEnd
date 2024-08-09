import {Form, Outlet} from "react-router-dom";
import Header from "../Components/Header";
import Orb from "../Components/Orb/Orb";
import {useMemo} from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer";
import TransactionActionModal from "../Components/TransactionAction/TransactionActionModal";

export default function MainLayout() {
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <div id="main-wrapper">
      {orbMemo}
      <div className="wrapper-content">
        <Nav />
        <div className="flex-grow-1">
          <Header/>
          <div className="content-body box-style">
            <div className="p-2">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}