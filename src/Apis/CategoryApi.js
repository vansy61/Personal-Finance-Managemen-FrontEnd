import axiosInstance from "./axiosInstance";

class CategoryApi {
  static getAll() {
    return axiosInstance.get('/api/v1/categories');
  }

  static async deleteCategory(categoryId) {
    return axiosInstance.delete('/api/v1/categories/' + categoryId);
  }
}

export default CategoryApi;