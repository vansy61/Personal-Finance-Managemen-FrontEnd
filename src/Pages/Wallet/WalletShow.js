import * as Yup from "yup";
import { useFormik } from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import WalletDelete from "../../Components/Wallet/WalletDelete";
import ShareWalletForms from "../../Components/Wallet/ShareWalletForm";
import { useSelector } from "react-redux";

const validationSchema = Yup.object({
  amount: Yup.number().min(0, "Số tiền hiện tại phải lớn hơn 0"),
  walletName: Yup.string().required("Vui lòng nhập tên ví!"),
  icon: Yup.string().required("Vui lòng chọn icon!"),
  currency: Yup.string().required("Vui lòng chọn loại tiền tệ!"),
  walletDescription: Yup.string().required("Vui lòng nhập mô tả!")
});

function WalletShow() {
  const user = useSelector((state) => state.auth.user);
  const { walletId } = useParams();
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await WalletApi.getWalletById(walletId);
        console.log('Wallet Data:', response.data);

        setWallet(response.data);

        const currentUserId = user.id;
        console.log('Current User ID:', currentUserId);

        const userRole = response.data.walletRoles.find(role => role.userId == currentUserId);
        console.log('User Role:', userRole);

        if (userRole && userRole.role === "OWNER") {
          setIsOwner(true);
        } else {
          setIsOwner(false);
        }

      } catch (error) {
        navigate("/wallets");
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, [walletId, navigate, user.id]);

  const handleDelete = async () => {
    try {
      await WalletApi.deleteWallet(walletId);
      Helper.toastSuccess('Xóa ví thành công!');
      navigate("/wallets");
    } catch (error) {
      Helper.parseError(error);
    }
  };

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

  const isEditMode = !!wallet;
  const isDisabled = !isOwner && isEditMode;

  return (
    <>
      <div className="card">
        <div className="card-body">
          {
            loading ? (
              <Skeleton count={2} height={200} />
            ) : (
              <WalletForm
                formik={formik}
                submitText={isEditMode ? "Cập nhật" : "Tạo mới"}
                deleteBtn={isOwner && isEditMode ? (
                  <WalletDelete handleDelete={handleDelete} />
                ) : null}
                isDisabled={isDisabled}
              />
            )
          }
        </div>
      </div>
      {isOwner && (
        <div className="card mb-4">
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>Danh sách shared của ví</span>
            <ShareWalletForms walletId={walletId} />
          </div>
        </div>
      )}
    </>
  );
}

export default WalletShow;
