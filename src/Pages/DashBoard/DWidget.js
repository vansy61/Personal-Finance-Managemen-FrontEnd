function DWidget() {
  return (
    <>
      <div className="col-4">
        <div className="card progress-card">
          <div className="card-body d-flex">
            <div className="me-auto">
              <h4 className="card-title mb-0">Số lượng giao dịch</h4>
              <span className="fs-12">Trong tháng này</span>
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
              <h4 className="card-title mb-0">Tổng thu</h4>
              <span className="fs-12">Trong tháng này</span>
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
              <h4 className="card-title mb-0">Tổng chi</h4>
              <span className="fs-12">Trong tháng này</span>
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