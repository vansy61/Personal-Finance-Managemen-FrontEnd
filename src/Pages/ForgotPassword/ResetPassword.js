import React, { useState } from 'react';
import Footer from "../../Components/Footer";
import { useMemo } from "react";
import Orb from "../../Components/Orb/Orb";
import { Link, useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import Helper from '../../utils/helpers';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Thêm trạng thái cho confirmPassword
  const [message, setMessage] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
  const navigate = useNavigate();

  
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Helper.toastError('Mật khẩu và mật khẩu xác nhận không khớp.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/v1/public/reset-password', {
        token,
        newPassword: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      Helper.toastSuccess('Mật khẩu đã được đặt lại thành công.');
      navigate('/login');
    } catch (error) {
      Helper.parseError(error);
    }
  };
  

  return (
    <div id="main-wrapper" className="login-page">
      {orbMemo}
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <a href="/" className="brand-logo">
                        {/* SVG Logo */}
                      </a>
                    </div>
                    <h3 className="text-center mb-4 mt-2">Đặt lại mật khẩu</h3>
                    {message && <div className="alert alert-info text-center">{message}</div>}
                    <form onSubmit={handleResetPassword}>
                      <div className="mb-3">
                        <label className="mb-1">
                          <strong>Mật khẩu mới</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Nhập mật khẩu mới"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-1">
                          <strong>Xác nhận mật khẩu</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Nhập lại mật khẩu mới"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block" >
                          Đặt lại mật khẩu
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Quay lại{" "}
                        <Link to={"/"} className="text-primary">
                          Trang chủ
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
