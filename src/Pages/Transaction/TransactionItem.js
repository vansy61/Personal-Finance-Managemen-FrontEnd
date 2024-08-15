import {Link} from "react-router-dom";

function TransactionItem({transaction, deleteBtn, editBtn}) {
    const urlImage = "/images/icons/" + transaction.icon + ".png";

    return (
        <div className="transaction-item bg-white shadow-sm p-3 rounded-3 d-flex align-items-center mb-2">
            <div className="border-end pe-3">
                <span className={`badge light badge-${transaction.categoryType === 1 ? "success" : "danger"}`}>{transaction.categoryType === 1 ? "Thu" : "Chi"}</span>
            </div>
            <div className="border-end px-3">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={urlImage} className="img-fluid" style={{width: "50px"}} alt="photo"/>
                    </div>
                    <div className="ms-3">
                        <h5 className="mb-0">{transaction.categoryName}</h5>
                    </div>
                </div>
            </div>
            <div className="border-end px-3">
                <i className="fa-solid fa-wallet"></i>
                <span className="ms-2 fs-14">{transaction.walletName}</span>
            </div>

            <div className="border-end px-3">
                <i className="fa-solid fa-money-bill"></i>
                <span className="ms-2 fs-14">{transaction.amount} đ</span>
            </div>
            <div className="px-3">
                <span className="ms-2 fs-14">{transaction.note}</span>
            </div>
            <div className="flex-grow-1 ps-3 text-end">
                {/*<Link to={"/"}>*/}
                {/*    <button type="button" className="btn btn-rounded btn-outline-secondary btn-sm p-2">*/}
                {/*        <span className="me-2">Sửa</span>*/}
                {/*        <i className="fa-solid fa-pen-to-square"></i>*/}
                {/*    </button>*/}
                {/*</Link>*/}
                <div className="flex-grow-1">
                    {editBtn}
                    {deleteBtn}
                </div>

            </div>
        </div>
    )
}

export default TransactionItem;
