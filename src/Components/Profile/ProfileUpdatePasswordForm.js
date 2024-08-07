function ProfileUpdatePasswordForm({formik}) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label>Mật khẩu hiện tại</label>
            <input
              className="form-control"
              id="currentPassword"
              name="currentPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.currentPassword}
            />
            {formik.touched.currentPassword && formik.errors.currentPassword ?
              <div className="text-danger">{formik.errors.currentPassword}</div> : null}
          </div>
          <div className="mb-3">
            <label>Mật khẩu mới</label>
            <input
              className="form-control"
              id="newPassword"
              name="newPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />
            {formik.touched.newPassword && formik.errors.newPassword ?
              <div className="text-danger">{formik.errors.newPassword}</div> : null}
          </div>
          <div className="mb-3">
            <label>Nhập lại mật khẩu</label>
            <input
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ?
              <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProfileUpdatePasswordForm;