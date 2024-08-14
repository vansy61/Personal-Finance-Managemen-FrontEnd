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

  static async deleteWallet(walletId) {
    return axiosInstance.delete('/api/v1/wallets/' + walletId);
  }

  static async transferMoney(fromWalletId, toWalletId, amoumt){
    return axiosInstance.post(`/api/vi/wallets/transfer/${fromWalletId}/${toWalletId}/${amoumt}`);
  }
}

export default WalletApi;
