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
        <Modal.Body>
          <h4>Bạn có chắc chắn muốn xóa tài khoản không?</h4>
          <p>Tất cả dữ liệu liên quan sẽ bị xóa, không thể khôi phục lại!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-sm" variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button className="btn-sm" variant="success" onClick={handleClose}>
            Xác Nhận Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProfileDelete;