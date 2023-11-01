import { axiosInstance } from "../lib/axiosInstance";

export const getAllCities = async () => {
  try {
    const res = await axiosInstance.get("basic/getAllCities");
    return res.data;
  } catch (error) {
    console.log("getAllCities", error);
  }
};
