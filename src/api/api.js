import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bf48f298-e640-4864-8094-9a481a57f14a",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        window.APIs = response.data;
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};
