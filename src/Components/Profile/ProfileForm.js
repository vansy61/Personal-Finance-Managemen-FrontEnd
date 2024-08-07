import Helper from "../../utils/helpers";

function ProfileForm({formik}) {

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label>Họ và tên</label>
            <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ?
              <div className="text-danger">{formik.errors.username}</div> : null}
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control disabled"
              id="email"
              type="text"
              disabled={true}
              value={formik.values.email}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label>Số điên thoại</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ?
              <div className="text-danger">{formik.errors.phone}</div> : null}
          </div>
          <div className="mb-3">
            <label>Ngày sinh</label>
            <input
              className="form-control"
              id="dob"
              name="dob"
              type="date"
              max={Helper.formatDate(new Date())}
              onChange={formik.handleChange}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob ?
              <div className="text-danger">{formik.errors.dob}</div> : null}
          </div>
        </div>
      </div>


      <div className="text-end">
        <button type="submit" className="btn btn-success mx-2 px-4 btn-sm" disabled={formik.isSubmitting}>Cập Nhật
        </button>

      </div>
    </form>

  )
}

export default ProfileForm;