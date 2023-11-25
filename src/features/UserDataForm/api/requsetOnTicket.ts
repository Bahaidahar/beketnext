import { axiosInstance } from "@/shared/lib/axiosInstance";
interface Station {
  id: number;
  stationName: string;
  address: string;
  contact: string;
}

interface Road {
  id: number;
  departure: {
    id: number;
    name: string;
    shortName: string;
    stations: Station[];
  };
  arrival: {
    id: number;
    name: string;
    shortName: string;
    stations: Station[];
  };
  departure_time: string;
  arrival_time: string;
  departure_date: string;
  arrival_date: string;
  bus_id: {
    id: number;
    stationId: Station;
    places: number;
    govNumber: string;
  };
}

interface Citizenship {
  id: number;
  name: string;
  shortName: string;
}

interface DocumentType {
  id: number;
  documentName: string;
}

interface Data {
  token: string;
  roadId: Road;
  place: string;
  dateOfBirth: string;
  name: string;
  surname: string;
  patronymic: string;
  citizenship: Citizenship;
  documentType: DocumentType;
  numberOfDocument: string;
}

export const requsetOnTicket = (data: Data) => {
  try {
    const res = axiosInstance.post("/api/ticket/receive", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
