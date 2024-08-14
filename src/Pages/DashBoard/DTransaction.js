import IncomeSvg from "../../Components/Icon/IncomeSvg";
import OutComeSvg from "../../Components/Icon/OutComeSvg";
import {useTranslation} from "react-i18next";

function DTransaction() {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-header d-block d-sm-flex border-0">
        <div className="me-3">
          <h4 className="card-title mb-2">{t("recentTransactions")}</h4>
          <span className="fs-12">
          {t("lastFiveTransactions")}
          </span>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-responsive-md card-table transactions-table">
            <tbody>
            <tr>
              <td>
                <IncomeSvg/>
              </td>
              <td>
                <h6 className="fs-16 font-w600 mb-0">
                  Luong
                </h6>
                <span className="fs-14">hello hello</span>
              </td>
              <td>
                <h6 className="fs-16 text-black font-w600 mb-0">
                  08/07/2024
                </h6>
                <span className="fs-14">05:34:45 AM</span>
              </td>
              <td>
                <span className="fs-16 text-black font-w600">
                  +10.000 đ
                </span>
              </td>
              <td>
                <span className="text-black fs-16 font-w500 text-end d-block">
                  Tk TPbank
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <OutComeSvg/>
              </td>
              <td>
                <h6 className="fs-16 font-w600 mb-0">
                  Mua hàng
                </h6>
                <span className="fs-14">hello hello</span>
              </td>
              <td>
                <h6 className="fs-16 text-black font-w600 mb-0">
                  07/07/2024
                </h6>
                <span className="fs-14">05:34:45 AM</span>
              </td>
              <td>
                <span className="fs-16 text-black font-w600">
                  -10.000 đ
                </span>
              </td>
              <td>
                <span className="text-black fs-16 font-w500 text-end d-block">
                  Ví tiền mặt
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <IncomeSvg/>
              </td>
              <td>
                <h6 className="fs-16 font-w600 mb-0">
                  Mua hàng
                </h6>
                <span className="fs-14">hello hello</span>
              </td>
              <td>
                <h6 className="fs-16 text-black font-w600 mb-0">
                  07/07/2024
                </h6>
                <span className="fs-14">05:34:45 AM</span>
              </td>
              <td>
                <span className="fs-16 text-black font-w600">
                  +10.000 đ
                </span>
              </td>
              <td>
                <span className="text-black fs-16 font-w500 text-end d-block">
                  Ví tiền mặt
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <OutComeSvg />
              </td>
              <td>
                <h6 className="fs-16 font-w600 mb-0">
                  Mua hàng
                </h6>
                <span className="fs-14">hello hello</span>
              </td>
              <td>
                <h6 className="fs-16 text-black font-w600 mb-0">
                  07/07/2024
                </h6>
                <span className="fs-14">05:34:45 AM</span>
              </td>
              <td>
                <span className="fs-16 text-black font-w600">
                  +10.000 đ
                </span>
              </td>
              <td>
                <span className="text-black fs-16 font-w500 text-end d-block">
                  Ví tiền mặt
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <IncomeSvg/>
              </td>
              <td>
                <h6 className="fs-16 font-w600 mb-0">
                  Mua hàng
                </h6>
                <span className="fs-14">hello hello</span>
              </td>
              <td>
                <h6 className="fs-16 text-black font-w600 mb-0">
                  07/07/2024
                </h6>
                <span className="fs-14">05:34:45 AM</span>
              </td>
              <td>
                <span className="fs-16 text-black font-w600">
                  +10.000 đ
                </span>
              </td>
              <td>
                <span className="text-black fs-16 font-w500 text-end d-block">
                  Ví tiền mặt
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DTransaction;