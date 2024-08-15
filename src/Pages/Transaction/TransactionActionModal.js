import {Button, Modal} from "react-bootstrap";
import ProfileUpdatePasswordForm from "../../Components/Profile/ProfileUpdatePasswordForm";
import {useState} from "react";
import TransactionActionContent from "./TransactionActionContent";

function TransactionActionModal({reload}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main-action">
      <Button className="btn-sm ms-2" variant="primary" onClick={handleShow}>
        <span className="mx-2">Thêm Giao Dịch</span>
        <i className="fa-solid fa-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" className="modal-box-style">
        <Modal.Body>
          <TransactionActionContent closeModal={handleClose} reload={reload}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default TransactionActionModal;