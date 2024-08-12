import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import TransactionApi from "../../Apis/TransactionApi";
import Helper from "../../utils/helpers";
import {useNavigate} from "react-router-dom";

function TransactionDelete({transactionId}) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeleteTransactionById = async () => {
        try {
            await TransactionApi.deleteTransaction(transactionId)
            handleClose()
            Helper.toastSuccess("Xoá thành công")
            // window.location.reload();
            navigate("/transactions")
        } catch (error) {
            Helper.toastError("Xoá thất bại")
        }
    }
    return (
        <>
            <button  className="btn btn-rounded btn-outline-danger btn-sm p-2 ms-2" onClick={handleShow}>
               Xoá
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h3>Bạn có chắc chắn muốn xóa ví này không?</h3>
                    <p>Tất cả dữ liệu liên quan sẽ bị xóa, không thể khôi phục lại!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-sm" variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button className="btn-sm" variant="success" onClick={handleDeleteTransactionById}>
                        Xác Nhận Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TransactionDelete;