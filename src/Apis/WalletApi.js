import axiosInstance from "./axiosInstance";

class WalletApi {
  static getAll() {
    return axiosInstance.get('/api/v1/wallets');
  }

  static async createWallet(data) {
    return axiosInstance.post('/api/v1/wallets', data)
  }

  static async getWalletById(id) {
    return axiosInstance.get('/api/v1/wallets/' + id);
  }

  static async updateWallet(walletId, data) {
    return axiosInstance.put('/api/v1/wallets/' + walletId, data)
  }
}

export default WalletApi;