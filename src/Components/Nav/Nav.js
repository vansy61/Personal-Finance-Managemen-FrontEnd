import {NavLink} from "react-router-dom";
import Logo from "../Logo";

function Nav() {
  return (
    <div className="dlabnav box-style">
      <div className="nav-header">
        <Logo width={53} height={53} />
      </div>

      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">

          <li>
            <NavLink to={"/"} className="has-arrow ai-icon">
              <i className="fa-solid fa-house"></i>
              <span className="nav-text">Tổng Quan</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/wallets"} className="has-arrow ai-icon">
              <i className="fa-solid fa-wallet"></i>
              <span className="nav-text">Ví tiền</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/transactions"} className="has-arrow ai-icon">
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span className="nav-text">Sổ Giao Dịch</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/budgets"} className="has-arrow ai-icon">
              <i className="fa-solid fa-coins"></i>
              <span className="nav-text">Ngân Sách</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categories"} className="has-arrow ai-icon">
              <i className="fa-solid fa-layer-group"></i>
              <span className="nav-text">Danh Mục</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/reports"} className="has-arrow ai-icon">
              <i className="fa-solid fa-chart-line"></i>
              <span className="nav-text">Báo cáo</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} className="has-arrow ai-icon">
              <i className="fa-solid fa-user"></i>
              <span className="nav-text">Tài Khoản</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/setting"} className="has-arrow ai-icon">
              <i className="fa-solid fa-gear"></i>
              <span className="nav-text">Cài Đặt</span>
            </NavLink>
          </li>

        </ul>
        <div className="copyright">
          <p>
            <strong>Ứng dụng quản lý tài chính</strong> © 2024 All Rights
            Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart"/> by HN x ĐN
          </p>
        </div>
      </div>
    </div>

  )
}

export default Nav;