import {Button, Modal} from "react-bootstrap";
import TransactionActionContent from "../../Pages/Transaction/TransactionActionContent";
import React, {useEffect, useState} from "react";
import TransactionFormik from "../../Pages/Transaction/TransactionFormik";
import Select from "react-select";
import {useFormik} from "formik";
import TransactionApi from "../../Apis/TransactionApi";
import Helper from "../../utils/helpers";
import * as Yup from "yup";
import CategoryApi from "../../Apis/CategoryApi";
import WalletApi from "../../Apis/WalletApi";

const CustomOption = (props) => {
    const {innerRef, innerProps, data} = props;
    return (
        <div ref={innerRef} {...innerProps}
             style={{display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer'}}>
            <img
                src={`/images/icons/${data.icon}.png`}
                style={{width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%'}}
            />
            {data.categoryName || data.walletName}
        </div>
    );
};

const customStyles = {
    control: (provided) => ({
        ...provided,
        height: '56px',  // Set the desired height
        minHeight: '56px',  // Ensure the height is not less than this value
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: '56px',  // Match the height of the control
        display: 'flex',
        alignItems: 'center',
    }),
};

const validationSchema = Yup.object({
    amount: Yup.number().min(0, "Số tiền phải lớn hơn 0"),
    note: Yup.string().required("Vui lòng nhập ghi chú"),
    datetime: Yup.date().required("vui lòng nhập ngày giao dịch"),
    categoryId: Yup.number().required("Không được để trống"),
    walletId: Yup.number().required("Không đuc để trông")
})
function TransactionEditModal({transactionId}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        getTransactionById();
        getAllCategoryByUserId();
        getAllWalletByUserId();
        const category =categories.find(c => c.id == transaction.categoryId)
        setSelectedOptionCategory(category.categoryName)
        const wallet = wallets.find(w=> w.id == transaction.walletId)
        setSelectedOptionWallet(wallet.walletName)
    };

    const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
    const [selectedOptionWallet, setSelectedOptionWallet] = useState(null);
    const [categories, setCategories] = useState([]);
    const [wallets, setWallets] = useState([]);
    const [transaction, setTransaction] = useState(null )

    const getTransactionById = async ()=>{
        const resp = await TransactionApi.getTransactionById(transactionId)

        formik.setFieldValue("amount", resp.data.amount)
        formik.setFieldValue("note", resp.data.note)
        formik.setFieldValue("datetime", resp.data.datetime)
        formik.setFieldValue("categoryId", resp.data.categoryId)
        formik.setFieldValue("walletId", resp.data.walletId)
        setTransaction({...resp.data})


    }

    const getAllCategoryByUserId = async () => {
        const response = await CategoryApi.getAll();
        setCategories(response.data);
    }

    const getAllWalletByUserId = async () => {
        const response = await WalletApi.getAll();
        setWallets(response.data);
    }



    useEffect(() => {
        getTransactionById();
        getAllCategoryByUserId();
        getAllWalletByUserId();
    }, []);
    const formik = useFormik({
            initialValues: {
                id:0,
                amount: 0,
                note: "",
                datetime: "",
                categoryId: 0,
                walletId: 0
            },
            validationSchema,
            onSubmit: async (values, {setSubmitting}) => {
                try {
                    console.log(values)
                    await TransactionApi.updateTransaction(transactionId,values)

                    Helper.toastSuccess("Cập nhật giao dịch mới thành công")
                    window.location.reload()

                } catch (error) {
                    console.log(error)
                    Helper.toastError("Cập nhật giao dịch thất bại")
                } finally {
                    setSubmitting(false);
                }
            },
            validateOnMount: false
        }
    )

    const handleSelectCategoryChange = (selectedOption) => {
        setSelectedOptionCategory(selectedOption);
        formik.setFieldValue('categoryId', selectedOption? selectedOption.id : '');
    };

    const handleSelectWalletChange = (selectedOption) => {
        setSelectedOptionWallet(selectedOption);
        formik.setFieldValue('walletId', selectedOption? selectedOption.id : '');
    };
    return (
        <>
                <button type="button" className="btn btn-rounded btn-outline-secondary btn-sm p-2" onClick={handleShow}>
                    <span className="me-2">Sửa</span>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            <Modal show={show} onHide={handleClose} size="lg" className="modal-box-style">
                <Modal.Body>
                    <div className="card mt-4">
                        <div className="card-body">
                            <div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label>Số tiền</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="amount"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.amount}/>
                                                {formik.touched.amount && formik.errors.amount ?
                                                    <div className="text-danger">{formik.errors.amount}</div> : null}
                                            </div>
                                            <div className="mb-3">
                                                <label>Ghi chú</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="note"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.note}/>
                                                {formik.touched.note && formik.errors.note ?
                                                    <div className="text-danger">{formik.errors.note}</div> : null}
                                            </div>
                                            <div className="mb-3">
                                                <label>Ngày thu</label>
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    name="datetime"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.datetime}/>
                                                {formik.touched.datetime && formik.errors.datetime ?
                                                    <div className="text-danger">{formik.errors.datetime}</div> : null}
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label>Loại giao dịch</label>
                                                <Select

                                                    defaultValue={selectedOptionCategory}
                                                    onChange={handleSelectCategoryChange}
                                                    name="categoryId"
                                                    value={selectedOptionCategory}
                                                    getOptionValue={(option) => option.id}
                                                    getOptionLabel={(option) => option.categoryName}
                                                    options={categories}
                                                    components={{Option: CustomOption}}
                                                    placeholder={selectedOptionCategory}
                                                    styles={customStyles}
                                                />

                                            </div>
                                            <div className="mb-3">
                                                <label>Ví tiền</label>
                                                <Select
                                                    defaultValue={transaction != null && "gengern"}
                                                    onChange={handleSelectWalletChange}
                                                    name="walletId"
                                                    value={selectedOptionWallet}
                                                    getOptionValue={(option) => option.id}
                                                    getOptionLabel={(option) => option.walletName}
                                                    options={wallets}
                                                    components={{Option: CustomOption}}
                                                    placeholder={selectedOptionWallet}

                                                    styles={customStyles}
                                                />
                                            </div>

                                        </div>
                                        <div className="text-end">
                                            <button className="btn btn-secondary btn-sm" type="button"
                                                   onClick={handleClose}>Hủy
                                            </button>
                                            <button type="submit" className="btn btn-success mx-2 px-4 btn-sm" onClick={handleClose}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TransactionEditModal;