import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom";
import CategoryApi from "../../Apis/CategoryApi";
import WalletApi from "../../Apis/WalletApi";


// Custom option component to include images
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


function IncomeTransactionForm({formik,closeModal}) {
  const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
  const [selectedOptionWallet, setSelectedOptionWallet] = useState(null);
    const [categories, setCategories] = useState([]);
    const [wallets, setWallets] = useState([]);
    console.log(formik)
    console.log(closeModal)
    console.log(123)
    const getAllCategoryByUserId = async () => {
        const response = await CategoryApi.getAll();
        const newCategories = response.data.filter((e) => e.categoryType == 1);
        setCategories(newCategories);
    }

    const getAllWalletByUserId = async () => {
        const response = await WalletApi.getAll();
        setWallets(response.data);
    }

    // const categories = [
    //     {id: 1, categoryName: 'Tiền Thuê Nhà', icon: 'icon_4'},
    //     {id: 2, categoryName: 'Tiền Abc', icon: 'icon_5'},
    //     {id: 3, categoryName: 'Tiền XYZ', icon: 'icon_6'},
    // ];
    //
    // const wallets = [
    //     {id: 1, walletName: 'Ví tiền mặt', icon: 'icon_25'},
    //     {id: 2, walletName: 'Ví Abc', icon: 'icon_10'},
    //     {id: 3, walletName: 'Ví XYZ', icon: 'icon_50'},
    // ];

    useEffect(() => {
        getAllCategoryByUserId();
        getAllWalletByUserId();
    }, []);

    const handleSelectCategoryChange = (selectedOption) => {
      setSelectedOptionCategory(selectedOption);
      formik.setFieldValue('categoryId', selectedOption? selectedOption.id : '');
    };

  const handleSelectWalletChange = (selectedOption) => {
    setSelectedOptionWallet(selectedOption);
    formik.setFieldValue('walletId', selectedOption? selectedOption.id : '');
  };

    return (
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

                                defaultValue={0}
                                onChange={handleSelectCategoryChange}
                                name="categoryId"
                                value={selectedOptionCategory}
                                getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.categoryName}
                                options={categories}
                                components={{Option: CustomOption}}

                                styles={customStyles}
                            />
                            {formik.touched.categoryId && formik.errors.categoryId ?
                                <div className="text-danger">{formik.errors.categoryId}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label>Ví tiền</label>
                            <Select
                                defaultValue={0}
                                onChange={handleSelectWalletChange}
                                name="walletId"
                                value={selectedOptionWallet}
                                getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.walletName}
                                options={wallets}
                                components={{Option: CustomOption}}
                                styles={customStyles}
                            />
                            {formik.touched.walletId && formik.errors.walletId ?
                                <div className="text-danger">{formik.errors.walletId}</div> : null}
                        </div>

                    </div>
                    <div className="text-end">
                        <button className="btn btn-secondary btn-sm" type="button" onClick={closeModal}>Hủy</button>
                        <button type="submit" className="btn btn-success mx-2 px-4 btn-sm">
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default IncomeTransactionForm;
