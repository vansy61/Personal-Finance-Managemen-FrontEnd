import Lottie from "lottie-react";
import error404 from "../../LottieData/error404.json";
import {Link} from "react-router-dom";

function Error404() {
  return (
    <div className="h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-7">
            <div className="form-input-content text-center error-page mt-5">
              <Lottie animationData={error404}/>

              <h3 className="mt-4 mb-3"><i className="fa fa-exclamation-triangle text-warning"></i> Trang bạn tìm không tồn tại!</h3>
              <div>
                <Link to={"/"} className="btn btn-primary">Quay lại trang chủ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404;