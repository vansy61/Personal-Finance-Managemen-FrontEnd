import Lottie from "lottie-react";
import WalletBounce from "../../LottieData/walletBounce.json";
import PolarBasic from "../../Components/Chart/PolarBasic";

function DWallet() {
  const chartOptions = {
    chart: {
      type: 'polarArea',
      height: 350,
      sparkline: {
        enabled: true
      }
    },
    labels: ["Mon", "Tue", "Wed", "Thu"],
    colors: ["#496ecc", "#68e365", "#ffa755", "#c8c8c8"],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  };

  const chartSeries = [40, 35, 30, 20];
  return (
    <div className="card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="card-bx bg-blue pe-0 py-4">
              <img
                className="pattern-img"
                src="/images/pattern/pattern6.png"
              />
              <div className="card-info text-white">
                <p className="fs-16 mb-4">Tổng tiền hiện có</p>
                <h2 className="text-white card-balance">8.000.000 đ</h2>
                <span>+0,8% so với tuần trước</span>
              </div>
              <div className="w-45">
                <Lottie animationData={WalletBounce}/>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row  mt-xl-0 mt-4">
              <div className="col-md-6">
                <h4 className="card-title">Tổng quan ví tiền</h4>
                <span>
                        Tiền đi có nhớ ví không? Ví thì mòn mỏi trông mong tiền về.
                      </span>
                <ul className="card-list mt-4">
                  <li>
                    <span className="bg-blue circle"/>
                    Ví tiền mặt
                  </li>
                  <li>
                    <span className="bg-success circle"/>
                    Tiết kiệm
                  </li>
                  <li>
                    <span className="bg-warning circle"/>
                    Tk Vietcombank
                  </li>
                  <li>
                    <span className="bg-light circle"/>
                    Tk Tpbank
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <PolarBasic options={chartOptions}
                            series={chartSeries}
                ></PolarBasic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DWallet;