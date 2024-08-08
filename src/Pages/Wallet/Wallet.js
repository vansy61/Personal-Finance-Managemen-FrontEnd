import {Link} from "react-router-dom";
import GradientLineChart from "../../Components/Chart/GradientLineChart";
import WalletItem from "./WalletItem";
import {useEffect, useState} from "react";
import UserApi from "../../Apis/UserApi";
import WalletApi from "../../Apis/WalletApi";
import Skeleton from "react-loading-skeleton";
import ProfileForm from "../../Components/Profile/ProfileForm";

function Wallet() {
  const [wallets, setWallets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await WalletApi.getAll();
        setWallets(response.data);
      } catch (error) {
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);
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
          loading ? (
            <Skeleton count={2} height={200}/>
          ) : (
            <div>
              {
                wallets.map((w, index) => <WalletItem key={w.id} wallet={w} index={index}/>)
              }
            </div>)
        }
      </div>
    </div>
  )
}

export default Wallet;