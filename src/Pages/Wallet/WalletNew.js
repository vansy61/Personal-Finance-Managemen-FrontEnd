import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import {useNavigate} from "react-router-dom";

const validationSchema = Yup.object({
  amount: Yup.number().min(0, "Tiền hiện có phải lớn hơn 0!"),
  walletName: Yup.string().required("Vui lòng nhập tên ví!"),
  icon: Yup.string().required("Vui lòng chọn icon!"),
  currency: Yup.string().required("Vui lòng chọn loại tiền tệ!"),
  walletDescription: Yup.string().required("Vui lòng nhập mô tả!")
});

function WalletNew() {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      amount: 0,
      walletName: "",
      icon: "icon_0",
      currency: "VND",
      walletDescription: ""
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await WalletApi.createWallet(values);
        Helper.toastSuccess('Tạo ví thành công!');
        navigate("/wallets");
      } catch (error) {
        Helper.toastError('Tạo ví thất bại!');
      } finally {
        setSubmitting(false);
      }
    },
    validateOnMount: false
  });
  return (
    <div className="card">
      <div className="card-body">
        <WalletForm formik={formik}/>
      </div>
    </div>
  );
}
export default WalletNew;