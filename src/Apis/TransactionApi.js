import axiosInstance from "./axiosInstance";
const url = 'api/v1/transaction';
class TransactionApi{

    static async getAll(){
        return axiosInstance.get(url)
    }
    static async createTransaction(data){
        return axiosInstance.post(url,data)
    }
    static async getTransactionById(id){
        return axiosInstance.get(url + id);
    }

    static async updateTransaction(transactionId, data){
        return axiosInstance.put(url + transactionId,data);
    }
    static async deleteTransaction(transactionId){
        return axiosInstance.delete(url + transactionId);
    }
}
export default TransactionApi;