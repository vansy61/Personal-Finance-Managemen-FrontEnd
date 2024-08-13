import {Link} from "react-router-dom";

function CategoryForm({formik, submitText = "Tạo mới", deleteBtn = <></>}) {


  const categoryTypeOptions = [{type: "income", value: 1}, {type: "outcome", value: 2}].map(el => {
    return (
      <option key={el.value} value={el.value}>
        {el.type}
      </option>
    );
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label>Loại phân loại</label>
            <select
              name="categoryType"
              id="categoryType"
              onChange={formik.handleChange}
              value={formik.values.categoryType}
              className="form-select"
            >
              <option value="">Chọn một loại phân loại</option>
              {categoryTypeOptions}
            </select>
            {formik.touched.categoryType && formik.errors.categoryType ?
              <div className="text-danger">{formik.errors.categoryType}</div> : null}
          </div>
          <div className="mb-3">
            <label>Tên phân loại</label>
            <input
              className="form-control"
              id="categoryName"
              name="categoryName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.categoryName}
            />
            {formik.touched.categoryName && formik.errors.categoryName ?
              <div className="text-danger">{formik.errors.categoryName}</div> : null}
          </div>
          <div className="mb-3">
            <label>Ghi chú</label>
            <input
              className="form-control"
              id="note"
              name="note"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.note}
            />
            {formik.touched.note && formik.errors.note ?
              <div className="text-danger">{formik.errors.note}</div> : null}
          </div>

        </div>
        <div className="col-6">
          <div className="mb-3">
            <div className="mb-3">
              <label>Icon phân loại</label>
              <div className="d-flex flex-wrap box-icon">
                {Array.from({length: 142}, (_, i) => `icon_${i}`).map((option) => (
                  <div key={option} className="icon-item">
                    <input
                      type="radio"
                      id={option}
                      name="icon"
                      value={option}
                      onChange={formik.handleChange}
                      checked={formik.values.icon === option}
                      className="d-none"
                    />
                    <label htmlFor={option}>
                      <img src={"/images/icons/" + option + ".png"} className="img-fluid" />
                    </label>
                  </div>
                ))}
              </div>
              {formik.touched.icon && formik.errors.icon ?
                <div className="text-danger">{formik.errors.icon}</div> : null}
            </div>
          </div>
        </div>
      </div>


      <div className="d-flex align-items-center justify-content-between">
        <div>
          {deleteBtn}
        </div>

        <div>
          <Link to={"/wallets"} className="btn btn-secondary btn-sm">Hủy</Link>
          <button type="submit" className="btn btn-success mx-2 px-4 btn-sm" disabled={formik.isSubmitting}>{submitText}
          </button>
        </div>

      </div>
    </form>
  )
}

export default CategoryForm;