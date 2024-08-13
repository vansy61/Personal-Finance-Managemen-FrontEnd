import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import {useNavigate} from "react-router-dom";
import CategoryForm from "./CategoryForm";

const validationSchema = Yup.object({
  categoryName: Yup.string().required("Vui lòng nhập tên ph loai!"),
  icon: Yup.string().required("Vui lòng chọn icon!"),
  categoryType: Yup.string().required("Vui lòng chọn loại loaại phân loa!"),
  note: Yup.string().required("Vui lòng nhập ghi chú")
});

function CategoryNew() {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      categoryName: "",
      icon: "icon_0",
      categoryType: 1,
      note: ""
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
        <CategoryForm formik={formik}/>
      </div>
    </div>
  );
}
export default CategoryNew;