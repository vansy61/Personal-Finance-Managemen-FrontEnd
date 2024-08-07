import {Link} from "react-router-dom";

function ProfilePlan() {
  return (
    <>
      <h5 className={"mt-3"}>Tài khoản miễn phí <Link to={"/upgrade"} className="text-blue">nâng cấp ngay!</Link></h5>
    </>
  )
}
export default ProfilePlan;