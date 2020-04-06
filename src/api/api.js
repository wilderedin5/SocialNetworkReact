import * as axios from 'axios';

const axiosClone = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "214badae-3b19-4362-9fbb-9abb5bfbc019"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            axiosClone.get(`users?page=${currentPage}&count=${pageSize}`)
        ).then(response => {
            return response.data
        });
    },
    unfollow(userId) {
        return axiosClone.delete(`follow/${userId}`);
    },
    follow(userId){
        return axiosClone.post(`follow/${userId}`);
    },
    getProfile(userId){
        return axiosClone.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me(){
        return axiosClone.get(`auth/me`);
    }
}

