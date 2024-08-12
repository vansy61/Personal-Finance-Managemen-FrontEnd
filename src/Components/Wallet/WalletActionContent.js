import { useState } from "react";
import axios from "axios";

function WalletActionContent({ walletId, closeModal }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('READ_ONLY');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Sending request to share wallet ${walletId} with email ${email} and role ${role}`);

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
      console.log('Wallet shared successfully:', response.data);
      closeModal();
    } catch (error) {
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
