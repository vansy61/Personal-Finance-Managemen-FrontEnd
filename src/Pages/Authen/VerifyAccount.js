import React, {useEffect, useMemo, useState} from "react";
import UserApi from "../../Apis/UserApi";
import Lottie from "lottie-react";
import AniSent from "../../LottieData/sent.json";
import {Link, useLocation} from "react-router-dom";
import Orb from "../../Components/Orb/Orb";
import Logo from "../../Components/Logo";
import AuthApi from "../../Apis/AuthApi";
import Helper from "../../utils/helpers";

function VerifyAccount() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const otp = queryParams.get('otp');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await Helper.delay(3000);
      try {
        await AuthApi.verifyAccount({email, otp});
        setStatus(true);
      } catch (error) {
        setStatus(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <div id="main-wrapper" className="login-page">
      {orbMemo}
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="auth-form text-center">
                <Logo width={70} height={70} simple={true} />
                <div>
                  {
                    loading ?
                      <div className={"text-center mt-5"}>
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <h4 className={"mt-4"}>Đang xác nhận email của bạn vui lòng đợi !</h4>

                      </div>
                      :
                      <div className="p-4 text-center">

                        {
                          status === true ?
                            <>
                              <h4 className="mb-5">Tài khoản của bạn đã được kích hoạt thành công!</h4>
                              <Link to={"/login"} className="btn btn-success">Đăng Nhập Ngay</Link>
                            </>
                            :
                              <h4 className="mb-5 text-danger">Không thể kích hoạt tài khoản của bạn!</h4>
                        }
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

export default VerifyAccount;
