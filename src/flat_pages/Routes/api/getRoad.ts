import { axiosInstance } from "@/shared/lib/axiosInstance";

interface IRoad {
  depCity: string;
  arrCity: string;
  dateOf: string;
}

export const getRoad = async ({ depCity, arrCity, dateOf }: IRoad) => {
  try {
    const res = await axiosInstance.get(
      `basic/getRoadByFilter?departureCity=${depCity}&arrivalCity=${arrCity}&departureDate=${dateOf}`
    );
    return res.data;
  } catch (error) {
    console.log("getRoadError", error);
  }
};
