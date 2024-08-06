import GradientLineChart from "../../Components/Chart/GradientLineChart";
import {Link} from "react-router-dom";
const walletColors = [
  '#ffa755',
  '#b48dd3',
  '#68e365',
  '#709fba',
  '#496ecc',
  '#5bcfc5',
]
function WalletItem({ wallet, index}) {
  return (
    <div className="col-4">
      <Link to={"/wallets/" + wallet.id} className="card card-bx p-0 invoice-card" style={{backgroundColor: walletColors[index]}}>
        <div className="card-body text-center mb-0 pb-1">
          <div className="icon mx-auto mb-3">
            <img src={`/images/icons/${wallet.icon}.png`} className="img-fluid"/>
          </div>
          <div>
            <h2 className="text-white invoice-num">{wallet.amount}</h2>
            <span className="text-white fs-18">{wallet.name}</span>
          </div>
        </div>
        <div>
          <GradientLineChart data={wallet.chart} color={walletColors[index]}/>
        </div>
      </Link>
    </div>
  )
}

export default WalletItem;