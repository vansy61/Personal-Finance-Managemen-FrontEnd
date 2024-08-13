import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import Helper from '../../utils/helpers';
import WalletForm from '../../Components/Wallet/WalletForm';
import WalletApi from '../../Apis/WalletApi';
import WalletDelete from '../../Components/Wallet/WalletDelete';
import ShareWalletForms from '../../Components/Wallet/ShareWalletForm';
import SharedUserList from '../../Components/Wallet/SharedUserList';


const validationSchema = Yup.object({
  amount: Yup.number().min(0, 'Số tiền hiện tại phải lớn hơn 0'),
  walletName: Yup.string().required('Vui lòng nhập tên ví!'),
  icon: Yup.string().required('Vui lòng chọn icon!'),
  currency: Yup.string().required('Vui lòng chọn loại tiền tệ!'),
  walletDescription: Yup.string().required('Vui lòng nhập mô tả!')
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
        setWallet(response.data);

        const currentUserId = user.id;
        const userRole = response.data.walletRoles.find(role => role.userId == currentUserId);

        setIsOwner(userRole && userRole.role === "OWNER");

      } catch (error) {
        navigate("/wallets");
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, [walletId]);

  const handleDelete = async () => {
    try {
      await WalletApi.deleteWallet(walletId);
      Helper.toastSuccess('Xóa ví thành công!');
      navigate("/wallets");
    } catch (error) {
      Helper.parseError(error);
    }
  };

  const handleUnshare = async (email) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/wallets/share-wallet/${walletId}`,
        { params: { email } }
      );
      Helper.toastSuccess("Xóa liên kết chia sẻ thành công!");

      setWallet((prevWallet) => ({
        ...prevWallet,
        walletRoles: prevWallet.walletRoles.filter((role) => role.userEmail !== email)
      }));
    } catch (error) {
      Helper.toastError("Không thể xóa liên kết chia sẻ: " + (error.response?.data || error.message));
    }
  };

  const handleUpdateRole = (userId, newRole) => {
    setWallet(prevWallet => ({
      ...prevWallet,
      walletRoles: prevWallet.walletRoles.map(role =>
        role.userId === userId ? { ...role, role: newRole } : role
      )
    }));
  };

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
      {isOwner && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Danh sách shared của ví</h5>
            {sharedUsers.length > 0 ? (
              <SharedUserList
                sharedUsers={sharedUsers}
                walletId={walletId}
                onUpdateRole={handleUpdateRole}
                handleUnshare={handleUnshare}
              />
            ) : (
              <p>Không có người dùng nào được chia sẻ.</p>
            )}
            <div className="mt-3">
              <ShareWalletForms walletId={walletId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WalletShow;
