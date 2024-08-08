import React, { useState } from 'react';
import { useMemo } from "react";
import Orb from "../../Components/Orb/Orb";
import Helper from "../../utils/helpers";
import AuthApi from "../../Apis/AuthApi";
import Lottie from "lottie-react";
import AniSent from "../../LottieData/sent.json";
import Logo from "../../Components/Logo";
import {Link} from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  
  const orbMemo = useMemo(() => {
    return <Orb />
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new URLSearchParams();
        formData.append('email', email);
        await AuthApi.forgotPassword(formData);
        setSent(true);
    } catch (error) {
      console.log(error)
        Helper.toastError(error.response.data);
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
                  {
                    sent ?
                      <div className="p-4 text-center">
                        <div className="w-50 mx-auto">
                          <Lottie animationData={AniSent}/>
                        </div>
                        <h4 className="mb-5">Email đặt lại mật khẩu đã được gửi, vui lòng kiểm tra!</h4>
                        <Link to={"/"} className="btn btn-success ms-2">Quay về trang chủ</Link>
                      </div>

                      :
                      <div className="auth-form">
                      <div className="text-center mb-3">
                          <Logo width={70} height={70} simple={true}/>
                        </div>
                        <h3 className="text-center mb-4 mt-2">Khôi Phục Mật Khẩu</h3>
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
                  }
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
