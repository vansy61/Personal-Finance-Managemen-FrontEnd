function Transaction() {
  return (
    <div>
        <div className="d-flex flex-wrap align-items-center mb-3">
          <div className="mb-3 me-auto">
            <div className="card-tabs style-1 mt-3 mt-sm-0">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="javascript:void(0);" >Tất cả</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);" >Thu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">Chi</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="javascript:void(0);" className="btn btn-outline-primary mb-3"><i
            className="fa fa-calendar me-3 scale3"></i>Filter Date</a>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div>
              <div className="fs-14">
                <table className="table card-table display mb-4 dataTablesCard text-black">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Icon</th>
                    <th>Ngày</th>
                    <th>Số tiền</th>
                    <th>Loại</th>
                    <th>Ví tiền</th>
                    <th>Ghi chú</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                      hello
                    </td>
                    <td>
                      hello
                    </td>
                    <td>
                      hello
                    </td>
                    <td>
                      hello
                    </td>
                    <td>
                      hello
                    </td>
                    <td>
                      hello
                    </td>

                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Transaction