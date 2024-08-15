import { Link } from "react-router-dom";
import WalletItem from "./WalletItem";
import { useEffect, useState } from "react";
import WalletApi from "../../Apis/WalletApi";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import AniEmpty from "../../LottieData/empty.json";

function Wallet() {
  const [wallets, setWallets] = useState([]);
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
            <Skeleton count={2} height={200} />
          ) : (
            <>
              {
                wallets.length == 0 ?
                  <div className="w-25 mx-auto pb-5">
                    <Lottie animationData={AniEmpty}
                    /> 
                    </div> :
                  <>
                    {
                      wallets.map((w, index) => <WalletItem key={w.id} wallet={w} index={index} />)
                    }
                  </>

              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default Wallet;