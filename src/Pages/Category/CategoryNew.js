import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/helpers";
import WalletForm from "../../Components/Wallet/WalletForm";
import WalletApi from "../../Apis/WalletApi";
import {useLocation, useNavigate} from "react-router-dom";
import CategoryForm from "./CategoryForm";
import CategoryApi from "../../Apis/CategoryApi";

const validationSchema = Yup.object({
  categoryName: Yup.string().required("Vui lòng nhập tên ph loai!"),
  icon: Yup.string().required("Vui lòng chọn icon!"),
  categoryType: Yup.string().required("Vui lòng chọn loại loaại phân loa!"),
  note: Yup.string().required("Vui lòng nhập ghi chú")
});

function CategoryNew() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const parentId = searchParams.get('parentId');


  const formik = useFormik({
    initialValues: {
      categoryName: "",
      icon: "icon_0",
      categoryType: 1,
      note: "",
      parentId: parentId? parseInt(parentId) : null
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await CategoryApi.createCategory(values);
        Helper.toastSuccess('Tạo phn loại thành công!');
        navigate("/categories");
      } catch (error) {
        Helper.toastError('Tạo phn loại thất bại!');
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