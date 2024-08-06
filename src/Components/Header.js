import {useLocation} from "react-router-dom";

export default function Header() {
  const location = useLocation();

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
                  <div className="user-con"><img src="./images/avatar.png" alt=""/>
                    <div className="text">
                      <h5 className="mb-0">Mike</h5><p className="mb-0">mike@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="page-error-404.html" className="m ai-icon">
                    <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="28"
                         height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </div>
          </div>
  )
}