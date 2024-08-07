import axiosInstance from "./axiosInstance";

class AuthApi {
  static login(data) {
    return axiosInstance.post('/api/v1/public/login', data);
  }

}

export default AuthApi;