import * as Yup from "yup";
import {useFormik} from "formik";
import Helper from "../../utils/helpers";
import IncomeTransactionForm from "./IncomeTransactionForm";
import TransactionApi from "../../Apis/TransactionApi";
import {useNavigate} from "react-router-dom";

const validationSchema = Yup.object({
    amount: Yup.number().min(0, "Số tiền phải lớn hơn 0"),
    note: Yup.string().required("Vui lòng nhập ghi chú"),
    datetime: Yup.date().required("vui lòng nhập ngày giao dịch"),
    categoryId: Yup.number().required("Không được để trống"),
    walletId: Yup.number().required("Không đuc để trông")
})

function IncomesTransactionNew({closeModal}) {
const navigate = useNavigate();

    const formik = useFormik({
            initialValues: {
                amount: 0,
                note: "",
                datetime: new Date(),
                categoryId: 0,
                walletId: 0
            },
            validationSchema,
            onSubmit: async (values, {setSubmitting}) => {
                try {
                    await TransactionApi.createTransaction(values)
                    closeModal();
                    Helper.toastSuccess("Tạo giao dịch mới thành công")
                    // window.location.reload();
                    navigate("/transactions")
                } catch (error) {
                    console.log(error)
                    Helper.toastError("Tạo giao dịch thất bại")
                } finally {
                    setSubmitting(false);
                }
            },
            validateOnMount: false
        }
    )
    return (
        <>
            <IncomeTransactionForm formik={formik} closeModal={closeModal}/>
        </>
    )
}

export default IncomesTransactionNew;