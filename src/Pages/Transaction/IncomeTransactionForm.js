import React, { useState } from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom";



// Custom option component to include images
const CustomOption = (props) => {
  const { innerRef, innerProps, data } = props;
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
      <img
        src={`/images/icons/${data.icon}.png`}
        style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }}
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
  const [selectedOption, setSelectedOption] = useState(null);

  const categories = [
    { id: 1, categoryName: 'Tiền Thuê Nhà', icon: 'icon_4' },
    { id: 2, categoryName: 'Tiền Abc', icon: 'icon_5' },
    { id: 3, categoryName: 'Tiền XYZ', icon: 'icon_6' },
  ];

  const wallets = [
    { id: 1, walletName: 'Ví tiền mặt', icon: 'icon_25' },
    { id: 2, walletName: 'Ví Abc', icon: 'icon_10' },
    { id: 3, walletName: 'Ví XYZ', icon: 'icon_50' },
  ];

  return (
    <div>
      <form action="#">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label>Số tiền</label>
              <input className="form-control" type="number"/>
            </div>
            <div className="mb-3">
              <label>Ghi chú</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="mb-3">
              <label>Ngày thu</label>
              <input className="form-control" type="datetime-local"/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label>Loại giao dịch</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.categoryName}
                options={categories}
                components={{Option: CustomOption}}
                styles={customStyles}
              />
            </div>
            <div className="mb-3">
              <label>Ví tiền</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.walletName}
                options={wallets}
                components={{Option: CustomOption}}
                styles={customStyles}
              />
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