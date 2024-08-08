import {Link} from "react-router-dom";
import {useMemo} from "react";
import Orb from "../../Components/Orb/Orb";
import AniSent from "../../LottieData/sent.json";
import Lottie from "lottie-react";

function ConfirmEmail() {
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
              <div className="auth-form">
                <div className="w-50 mx-auto">
                  <Lottie animationData={AniSent}/>
                </div>
                <div className="text-center">
                  <h3 className={"mb-5"}>Liên kết xác nhận tài khoản đã được gửi đến email của bạn, vui lòng xác nhận!</h3>
                  <Link to={"/login"} className="btn btn-primary">Đăng nhập ngay</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmEmail;