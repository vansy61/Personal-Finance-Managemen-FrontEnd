import axiosInstance from "./axiosInstance";

class WalletApi {
  static getAll() {
    return axiosInstance.get('/api/v1/user/me');
  }

}

export default WalletApi;