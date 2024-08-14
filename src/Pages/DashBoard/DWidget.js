import {useTranslation} from "react-i18next";

function DWidget() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-4">
        <div className="card progress-card">
          <div className="card-body d-flex">
            <div className="me-auto">
              <h4 className="card-title mb-0">{t("totalTransactions")}</h4>
              <span className="fs-12">{t("currentMonth")}</span>
              <div className="d-flex align-items-center mt-2">
                <h2 className="fs-34 mb-0 me-3">400</h2>
                <span className="badge badge-danger">-10.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card progress-card">
          <div className="card-body d-flex">
            <div className="me-auto">
              <h4 className="card-title mb-0">{t("totalIncome")}</h4>
              <span className="fs-12">{t("currentMonth")}</span>
              <div className="d-flex align-items-center mt-2">
                <h2 className="fs-34 mb-0 me-3">98.000.000 đ</h2>
                <span className="badge badge-success">+0.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card progress-card">
          <div className="card-body d-flex">
            <div className="me-auto">
              <h4 className="card-title mb-0">{t("totalExpense")}</h4>
              <span className="fs-12">{t("currentMonth")}</span>
              <div className="d-flex align-items-center mt-2">
                <h2 className="fs-34 mb-0 me-3">10.000.000 đ</h2>
                <span className="badge badge-danger">-1.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default DWidget;