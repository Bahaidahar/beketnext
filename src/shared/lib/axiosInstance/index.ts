import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://beksbyrestapi-7ybh5s4inq-uc.a.run.app/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
