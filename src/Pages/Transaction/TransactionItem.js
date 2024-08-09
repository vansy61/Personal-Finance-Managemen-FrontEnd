function TransactionItem({transactions, i}) {
    return (
        <div className="transaction-item bg-white shadow-sm p-3 rounded-3 d-flex align-items-center mb-2">
            <div className="border-end pe-3">
                <span className="badge light badge-danger">Chi</span>
            </div>
            <div className="border-end px-3">
                <div className="d-flex align-items-center">
                    <div>
                        <img src="/images/icons/icon_5.png" className="img-fluid" style={{width: "50px"}}/>
                    </div>
                    <div className="ms-3">
                        <h5 className="mb-0">Tiền teesst</h5>
                        <p className="mb-0"><small>03:30 12/10.2024</small></p>
                    </div>
                </div>
            </div>
            <div className="border-end px-3">
                <i className="fa-solid fa-wallet"></i>
                <span className="ms-2 fs-14">Ví Tiền Mặt</span>
            </div>

            <div className="border-end px-3">
                <i className="fa-solid fa-money-bill"></i>
                <span className="ms-2 fs-14">200.000 đ</span>
            </div>
            <div className="px-3">
                <span className="ms-2 fs-14">Đây là ghi chú nè ghi chú nè ghi chú nè ...</span>
            </div>
            <div className="flex-grow-1 ps-3 text-end">
                <button type="button" className="btn btn-rounded btn-outline-secondary btn-sm p-2">
                    <span className="me-2">Sửa</span>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" className="btn btn-rounded btn-outline-danger btn-sm p-2 ms-2">
                    <span className="me-2">Xóa</span>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default TransactionItem;