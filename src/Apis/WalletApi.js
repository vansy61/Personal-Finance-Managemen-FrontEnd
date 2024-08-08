import axiosInstance from "./axiosInstance";

class WalletApi {
  static getAll() {
    return axiosInstance.get('/api/v1/wallets');
  }

}

export default WalletApi;