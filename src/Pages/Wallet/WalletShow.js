import * as Yup from "yup";
import { useFormik } from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import WalletDelete from "../../Components/Wallet/WalletDelete";
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
  }, [walletId, navigate]);

  const handleDelete = async () => {

    try {
      await WalletApi.deleteWallet(walletId);
      Helper.toastSuccess('Xóa ví thành công!');
      navigate("/wallets");
    } catch (error) {
      Helper.parseError(error);
    }

  };

  // Lọc ra những người dùng khác (không phải người tạo ví)
  const sharedUsers = wallet ? wallet.walletRoles.filter(role => role.userId !== user.id) : [];

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
      <div className="card">
        <div className="card-body">
          {
            loading ? (
              <Skeleton count={2} height={200} />
            ) : (
              <WalletForm
                formik={formik}
                submitText={"Cập nhật"}
                deleteBtn={isOwner ? <WalletDelete handleDelete={handleDelete} /> : null}
                isReadOnly={!isOwner}
              />
            )
          }
        </div>
      </div>
      {isOwner && ( // Chỉ hiển thị khi người dùng là OWNER
        <div className="card mb-4">
          <div className="card-body">
            <h5>Danh sách shared của ví</h5>
            {sharedUsers.length > 0 ? (
              <ul className="list-group">
                {sharedUsers.map(user => (
                  <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <div><strong>UserName:</strong> {user.userName}</div>
                      <div><strong>Email:</strong> {user.userEmail}</div>
                      <div><strong>Vai trò:</strong> {user.role}</div>
                    </div>
                    <button className="btn btn-danger btn-sm">Xóa liên kết</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không có người dùng nào được chia sẻ.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default WalletShow;
