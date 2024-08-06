import Lottie from "lottie-react";
import WalletBounce from "../../LottieData/walletBounce.json"
import PolarBasic from "../../Components/Chart/PolarBasic";
import IncomeSvg from "../../Components/Icon/IncomeSvg";
import OutComeSvg from "../../Components/Icon/OutComeSvg";
import DWallet from "./DWallet";
import DTransaction from "./DTransaction";
import {Link} from "react-router-dom";
import DBudget from "./DBudget";
import DWidget from "./DWidget";
export default function Dashboard() {


  return (
    <div>
      <div className="row">
        <div className="col-12">
          <DWallet/>
        </div>
        <DWidget />
        <div className="col-4">
          <DBudget />
        </div>
        <div className="col-8">
          <DTransaction/>
        </div>
      </div>
    </div>
  )
}