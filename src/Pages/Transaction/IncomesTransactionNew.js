import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";

const validationSchema = Yup.object({
    amount:Yup.number().min(0,"Số tiền phải lớn hơn 0"),
    note:Yup.string().required("Vui lòng nhập ghi chú"),
    datetime:Yup.date().required("vui lòng nhập ngày giao dịch"),
    categoryId:Yup.number().required("Không được để trống"),
    walletId:Yup.number().required("Không đuc để trông")
})

function IncomesTransactionNew() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            amount:0,
            note:"",
            datetime:new Date().toISOString().split('T')[0],
            categoryId:0,
            walletId:0
        },
        validationSchema,
        onSubmit: async (values,{setSubmitting})=>{

        }
        }

    )
}

export default IncomesTransactionNew;