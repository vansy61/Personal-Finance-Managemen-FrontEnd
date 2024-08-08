import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import WalletDelete from "../../Components/Wallet/WalletDelete";

const validationSchema = Yup.object({
  amount: Yup.number().min(0, "Số tiền hiện tại phải lớn hơn 0"),
  walletName: Yup.string().required("Vui lòng nhập tên ví!"),
  icon: Yup.string().required("Vui lòng chọn icon!"),
  currency: Yup.string().required("Vui lòng chọn loại tiền tệ!"),
  walletDescription: Yup.string().required("Vui lòng nhập mô tả!")
});

function WalletShow() {
  const {walletId} = useParams();
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await WalletApi.getWalletById(walletId);
        console.log(response.data);
        setWallet(response.data);
      } catch (error) {
        navigate("/wallets");
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  const handleDelete = async () => {
    try {
      await WalletApi.deleteWallet(walletId);
      Helper.toastSuccess('Xóa ví thành công!');
      navigate("/wallets");
    } catch (error) {
      Helper.parseError(error)
    }
  }

  const formik = useFormik({
    initialValues: wallet ? {
      amount: wallet.amount,
      walletName: wallet.walletName,
      icon: wallet.icon,
      currency: wallet.currency,
      walletDescription: wallet.walletDescription
    } : {
      amount: 0,
      walletName: "",
      icon: "icon_0",
      currency: "VND",
      walletDescription: ""
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await WalletApi.updateWallet(walletId, values);
        Helper.toastSuccess('Cập nhật ví thành công!');
        navigate("/wallets");
      } catch (error) {
        Helper.toastError('Cập nhật ví thất bại!');
      } finally {
        setSubmitting(false);
      }
    },
    validateOnMount: false
  });
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          Danh sách shared của ví
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          {
            loading ? (
              <Skeleton count={2} height={200}/>
            ) : (
              <WalletForm formik={formik} submitText={"Cập nhật"} deleteBtn={<WalletDelete handleDelete={handleDelete}/>}/>
            )
          }
        </div>
      </div>
    </>
  );
}

export default WalletShow;