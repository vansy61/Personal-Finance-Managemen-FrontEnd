import {useState} from "react";
import {Button, Modal} from "react-bootstrap";




function ProfileDelete() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="btn-sm ms-2" variant="danger" onClick={handleShow}>
        Xóa tài khoản
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tính năng này đang trong quá trình phát triển.
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-sm" variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button className="btn-sm" variant="success" onClick={handleClose}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProfileDelete;