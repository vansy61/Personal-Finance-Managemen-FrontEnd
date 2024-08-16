import React, {useEffect, useState} from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import WalletApi from "../../Apis/WalletApi";
import Helper from "../../utils/helpers";

const CustomOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
        <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
            <img src={`/images/icons/${data.icon}.png`} style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }} />
            {data.walletName}
        </div>
    );
};

const customStyles = {
    control: (provided) => ({
        ...provided,
        height: '56px',
        minHeight: '56px',
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: '56px',
        display: 'flex',
        alignItems: 'center',
    }),
};

function TransferTransactionForm({ formik, closeModal, reload }) {
    const currentUserId = useSelector(state => state.auth.user.id);  // Lấy ID người dùng hiện tại
    const [selectedSourceWallet, setSelectedSourceWallet] = useState(null);
    const [selectedDestinationWallet, setSelectedDestinationWallet] = useState(null);
    const [wallets, setWallets] = useState([]);

    const getAllWalletByUserId = async () => {
        const response = await WalletApi.getAll();
        const userWallets = response.data.filter(wallet =>
            wallet.walletRoles.some(role => role.userId === currentUserId)
        );
        setWallets(userWallets);
    };

    const handleSourceWalletChange = (selectedOption) => {
        setSelectedSourceWallet(selectedOption);
        formik.setFieldValue('sourceWalletId', selectedOption ? selectedOption.id : '');
    };

    const handleDestinationWalletChange = (selectedOption) => {
        setSelectedDestinationWallet(selectedOption);
        formik.setFieldValue('destinationWalletId', selectedOption ? selectedOption.id : '');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fromWalletId = selectedSourceWallet ? selectedSourceWallet.id : null;
        const toWalletId = selectedDestinationWallet ? selectedDestinationWallet.id : null;
        const amount = formik.values.amount;

        if (fromWalletId && toWalletId && amount) {
            try {
                await WalletApi.transferMoney(fromWalletId, toWalletId, amount);
                Helper.toastSuccess("Chuyển tiền thành công");
                closeModal();
                reload(true);
            } catch (error) {
                Helper.parseError(error);
            }
        } else {
            Helper.toastError("Vui lòng điền đầy đủ thông tin");
        }
    };

    useEffect(() => {
        getAllWalletByUserId();
    }, []);

    // Lọc các ví nhận tiền (loại trừ ví đã được chọn làm ví chuyển tiền)
    const availableDestinationWallets = wallets.filter(wallet =>
        wallet.id !== selectedSourceWallet?.id
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label>Số tiền</label>
                            <input
                                className="form-control"
                                type="number"
                                name="amount"
                                onChange={formik.handleChange}
                                value={formik.values.amount}
                            />
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
                                value={formik.values.note}
                            />
                            {formik.touched.note && formik.errors.note ?
                                <div className="text-danger">{formik.errors.note}</div> : null}
                        </div>
                        <div className="mb-3">
                            <label>Ngày chuyển</label>
                            <input
                                className="form-control"
                                type="date"
                                name="datetime"
                                onChange={formik.handleChange}
                                value={formik.values.datetime}
                            />
                            {formik.touched.datetime && formik.errors.datetime ?
                                <div className="text-danger">{formik.errors.datetime}</div> : null}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label>Ví chuyển tiền</label>
                            <Select
                                defaultValue={0}
                                onChange={handleSourceWalletChange}
                                name="sourceWalletId"
                                value={selectedSourceWallet}
                                getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.walletName}
                                options={wallets.filter(wallet =>
                                    wallet.walletRoles.some(role => role.userId === currentUserId && role.role === 'OWNER')
                                )}
                                components={{ Option: CustomOption }}
                                styles={customStyles}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Ví nhận tiền</label>
                            <Select
                                onChange={handleDestinationWalletChange}
                                name="destinationWalletId"
                                value={selectedDestinationWallet}
                                getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.walletName}
                                options={availableDestinationWallets}
                                components={{ Option: CustomOption }}
                                styles={customStyles}
                            />
                        </div>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-secondary btn-sm" type="button" onClick={closeModal}>Hủy</button>
                        <button type="submit" className="btn btn-success mx-2 px-4 btn-sm">Thêm</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TransferTransactionForm;

