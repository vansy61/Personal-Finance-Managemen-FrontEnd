import {useLocation} from "react-router-dom";
import Logout from "./Auth/Logout";
import {useSelector} from "react-redux";
import Helper from "../utils/helpers";

export default function Header() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  console.log('User:', user);

  const getTitle = () => {
    const path = location.pathname;

    if (/^\/transactions/.test(path)) {
      return 'Giao dịch';
    }
    if (/^\/wallets/.test(path)) {
      return 'Ví tiền';
    }
    if (/^\/budgets/.test(path)) {
      return 'Ngân sách';
    }
    if (/^\/categories/.test(path)) {
      return 'Danh mục';
    }
    if (/^\/reports/.test(path)) {
      return 'Báo cáo';
    }
    if (/^\/profile/.test(path)) {
      return 'Tài khoản';
    }
    if (/^\/setting/.test(path)) {
      return 'Cài đặt';
    }

    return 'Tổng quan';
  }

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand box-style">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">{getTitle()}</div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item">
                <div className="user-con"><img src={user?.avatar ? Helper.imageHostUrl(user.avatar) : "./images/avatar.png"} alt=""/>
                  <div className="text">
                    <h5 className="mb-0">{user?.username}</h5><p className="mb-0">{user?.email}</p>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Logout />
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
