function SettingForm({formik}) {
    console.log(formik.values)
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label>Tiền tệ</label>
                        <select
                            name="currency"
                            id="currency"
                            onChange={formik.handleChange}
                            value={formik.values.currency}
                            className="form-select"
                        >
                            <option value="USD">USD</option>
                            <option value="VND">VND</option>
                            <option value="KRW">KRW</option>
                            <option value="RUB">RUB</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Định dạng hiển thị tiền</label>
                        <select
                            name="formatCurrency"
                            id="formatCurrency"
                            onChange={formik.handleChange}
                            value={formik.values.formatCurrency}
                            className="form-select"
                        >
                            <option value="vi">100.000 ₫</option>
                            <option value="en">$100,000</option>
                        </select>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mb-3">
                        <label>Định dạng ngày</label>
                        <select
                            name="formatDate"
                            id="formatDate"
                            onChange={formik.handleChange}
                            value={formik.values.formatDate}
                            className="form-select"
                        >
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            <option value="YYYY/MM/DD">YYYY/MM/DD</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="text-end">
                <button type="submit" className="btn btn-success mx-2 px-4 btn-sm" disabled={formik.isSubmitting}>Cập
                    Nhật
                </button>

            </div>
        </form>

    )
}

export default SettingForm;