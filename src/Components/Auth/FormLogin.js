import {Link} from "react-router-dom";

function FormLogin({formik}) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ?
              <div className="text-danger">{formik.errors.email}</div> : null}
          </div>
          <div className="mb-3">
            <label>Mật khẩu</label>
            <input
              className="form-control disabled"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ?
              <div className="text-danger">{formik.errors.password}</div> : null}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-4 mb-2">
        <div className="mb-3">
          <Link to={"/forgot-password"}>Quên mật khẩu ?</Link>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary btn-block" disabled={formik.isSubmitting}>Đăng nhập
        </button>
      </div>
    </form>

  )
}

export default FormLogin