import { axiosInstance } from "@/shared/lib/axiosInstance";

interface IReg {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export const requestOnRegister = async (data: IReg) => {
  try {
    const res = await axiosInstance.post("registration", data);
    console.log("requsetOnRegister", res);
    return res.status;
  } catch (error) {
    console.log("requsetOnRegister", error);
  }
};
