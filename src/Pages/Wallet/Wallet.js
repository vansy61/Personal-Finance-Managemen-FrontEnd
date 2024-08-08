import {Link} from "react-router-dom";
import GradientLineChart from "../../Components/Chart/GradientLineChart";
import WalletItem from "./WalletItem";
import {useEffect, useState} from "react";
import UserApi from "../../Apis/UserApi";

function Wallet() {
  const [wallets, setWallets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserApi.getCurrentUser();
        setUser(response.data);
      } catch (error) {
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  // const wallets = [
  //   {
  //     id: 1,
  //     amount: '65.560.100 đ',
  //     name: 'Ví tiền mặt',
  //     icon: 'icon_50',
  //     chart: [31, 40, 28, 51, 42, 109, 100]
  //   },
  //   {
  //     id: 2,
  //     amount: '106.099.000 đ',
  //     name: 'Tiết kiệm',
  //     icon: 'icon_0',
  //     chart: [86, 114, 106, 106, 129, 103, 154]
  //   },
  //   {
  //     id: 3,
  //     amount: '98.499.000 đ',
  //     name: 'Tk Vietcombank',
  //     icon: 'icon_60',
  //     chart: [55, 71, 131, 133, 150, 120, 110]
  //   }
  // ]
  return (
    <div>
      <div className="text-end">
        <Link to={'/wallets/new'} className="btn btn-primary btn-sm">
          <span className="me-2">Tạo ví mới</span>
          <i className="fa-solid fa-plus"></i>
        </Link>
      </div>
      <div className="row invoice-card-row mt-4">
        {
          wallets.map((w, index) => <WalletItem key={w.id} wallet={w} index={index}/>)
        }
      </div>
    </div>
  )
}

export default Wallet;