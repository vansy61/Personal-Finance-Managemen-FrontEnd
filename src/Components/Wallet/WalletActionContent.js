import React, { useState } from 'react';
import axios from 'axios';
import Helper from "../../utils/helpers";

function WalletActionContent({ walletId, closeModal, onShareSuccess }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('READ_ONLY'); // Mặc định là READ_ONLY

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/wallets/share-wallet/${walletId}`,
        null,
        {
          params: {
            email: email,
            role: role
          }
        }
      );

      Helper.toastSuccess('Đã chia sẻ ví thành công!');
      closeModal();
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || error.response.data;

        if (errorMessage.includes("Người dùng không tồn tại")) {
          Helper.toastError('Người dùng không tồn tại!');
        } else if (errorMessage.includes("Ví này đã được chia sẻ với người dùng này")) {
          Helper.toastError('Ví này đã được chia sẻ với người dùng này.');
        } else {
          Helper.toastError(`Đã xảy ra lỗi: ${errorMessage}`);
        }
      } else {
         Helper.toastError('Đã xảy ra lỗi khi chia sẻ ví!');
      }
      console.error('Error sharing wallet:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <div className="me-auto">
        <div className="card-tabs style-1 mt-3 mt-sm-0">
          <ul className="nav nav-tabs mx-auto shadow-sm" role="tablist">
            <li className="nav-item">
              <a className="nav-link active">
                Thêm Người dùng
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Nhập Gmail của người dùng
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">Chọn quyền:</label>
              <select
                id="role"
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="READ_ONLY">READ_ONLY</option>
                <option value="OWNER">OWNER</option>
              </select>
            </div>

            <div className="d-flex justify-content-center w-100">
              <button type="submit" className="btn btn-primary">
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WalletActionContent;
