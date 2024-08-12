import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import WalletActionContent from "./WalletActionContent";

function ShareWalletForms({ walletId }) { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (
    <div className="main-action">
      <Button
        className="btn-sm ms-2"
        variant="primary"
        onClick={handleShow} 
      >
        <span className="mx-2">Thêm người được chia sẻ ví</span>
        <i className="fa-solid fa-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" className="modal-box-style">
        <Modal.Body>
          {walletId !== null && walletId !== undefined && (
            <WalletActionContent walletId={walletId} closeModal={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ShareWalletForms;
