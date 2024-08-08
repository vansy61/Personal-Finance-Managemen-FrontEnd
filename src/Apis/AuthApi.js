import axiosInstance from "./axiosInstance";

class AuthApi {
  static login(data) {
    return axiosInstance.post('/api/v1/public/login', data);
  }


  static forgotPassword(data) {
    return axiosInstance.post('/api/v1/public/forgot-password', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

}

export default AuthApi;