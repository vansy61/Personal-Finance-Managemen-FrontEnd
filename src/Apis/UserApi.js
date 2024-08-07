import axiosInstance from "./axiosInstance";

class UserApi {
  static getCurrentUser() {
    return axiosInstance.get('/api/v1/user/me');
  }

  static updateCurrentUser(data) {
    return axiosInstance.put('/api/v1/user/me', data);
  }

  static uploadAvatarCurrentUser(data) {
    return axiosInstance.put('/api/v1/user/me/upload-avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default UserApi;