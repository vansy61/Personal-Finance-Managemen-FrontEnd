import React, { useState } from 'react';
import Footer from "../../Components/Footer";
import { useMemo } from "react";
import Orb from "../../Components/Orb/Orb";
import { Link } from "react-router-dom";
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const orbMemo = useMemo(() => {
    return <Orb />
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new URLSearchParams();
        formData.append('email', email);

        const response = await axios.post('http://localhost:8080/api/v1/public/forgot-password', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        setMessage(response.data);
    } catch (error) {
        setMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
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
                    <h3 className="text-center mb-4 mt-2">Khôi Phục Mật Khẩu</h3>
                    {message && <div className="alert alert-info text-center">{message}</div>}
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="mb-1">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Nhập email của bạn"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block">
                          Gửi
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Chưa có tài khoản ?{" "}
                        <Link to={"/signup"} className="text-primary">
                          Đăng ký
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
    </div>
  )
}

export default ForgotPassword;
