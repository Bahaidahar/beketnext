import { axiosInstance } from "@/shared/lib/axiosInstance";

import { AxiosError } from "axios";

interface ILogin {
  email: string;
  password: string;
}

export const requestOnLogin = async (data: ILogin) => {
  try {
    const res = await axiosInstance.post("auth", data);
    localStorage.setItem("access_token", res.data.token);
    return res.status;
  } catch (error) {
    console.log(error);
  }
};
