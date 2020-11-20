import * as axios from "axios";

const axiosClone = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "384b8ba6-d625-4976-9412-858366c0e544",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosClone
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userId) {
    return axiosClone.delete(`follow/${userId}`);
  },
  follow(userId) {
    return axiosClone.post(`follow/${userId}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return axiosClone.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return axiosClone.get(`profile/status/${userId}`);
  },
  editStatus(status) {
    return axiosClone.put(`profile/status/`, { status: status });
  },
  uploadPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return axiosClone.put(`profile/photo`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  },
  editProfile(profile) {
    return axiosClone.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    console.log(axiosClone.get(`auth/me`).then((data) => console.log(data)));
    return axiosClone.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return axiosClone.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return axiosClone.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosClone.get(`security/get-captcha-url`);
  },
};
