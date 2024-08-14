import GradientLineChart from "../../Components/Chart/GradientLineChart";
import {Link} from "react-router-dom";
import {FormattedNumber} from "react-intl";
import WalletAction from "./WalletAction";
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
    <div className="col-4 position-relative invoice-wrapper">
      <Link to={"/wallets/" + wallet.id} className="card card-bx p-0 invoice-card"
            style={{backgroundColor: walletColors[index]}}>
        <div className="card-body text-center mb-0 pb-1">
          <div className="icon mx-auto mb-3">
            <img src={`/images/icons/${wallet.icon}.png`} className="img-fluid"/>
          </div>
          <div>
            <h2 className="text-white invoice-num">
              <FormattedNumber value={wallet.amount} style="currency" currency={wallet.currency}/>
            </h2>
            <span className="text-white fs-18">{wallet.walletName}</span>
          </div>
        </div>
        <div>
          <GradientLineChart data={[31, 40, 28, 51, 42, 109, 100]} color={walletColors[index]}/>
        </div>

      </Link>
      <WalletAction walletId={wallet.id}/>
    </div>
  )
}

export default WalletItem;