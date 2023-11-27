"use client";
import s from "./styles/index.module.scss";

import Link from "next/link";

import Image from "next/image";
import { place1, list } from "@/shared";
import UserDataForm from "@/features/UserDataForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRoad } from "@/shared/api";
import { requsetOnTicket } from "@/features/UserDataForm/api/requsetOnTicket";

interface IRoutePage {
  depCity: string;
  arrCity: string;
  dateOf: string;
  id: string;
}

interface ICity {
  id: number;
  name: string;
  shortName: string;
  stations: any[];
}

interface IBus {
  id: number;
  stationId: any;
  places: number;
  govNumber: string;
}

interface IRoadData {
  id: number;
  price: number;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
  arrival: ICity;
  departure: ICity;
  bus_id: IBus;
}

const RoutePage = ({ depCity, arrCity, dateOf, id }: IRoutePage) => {
  const router = useRouter();
  const [dateOfTrip, setDateOfTrip] = useState<string>(dateOf);
  const [dataOfRoad, setDataOfRoad] = useState<IRoadData>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  //for userDatr
  const [surName, setSurName] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [citizenshipFor, setCitizenshipFor] = useState("");
  const [document, setDocument] = useState("");
  const [docNum, setDocNum] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState("");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  useEffect(() => {
    if (dateOfTrip !== dateOf) {
      router.push(
        `/route/depCity=${depCity}&arrCity=${arrCity}&date=${dateOfTrip}`
      );
    }
  });

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (dataOfRoad) {
      const arrivalDateTime: Date = new Date(
        `${dataOfRoad.arrival_date}T${dataOfRoad.arrival_time}:00`
      );
      const departureDateTime: Date = new Date(
        `${dataOfRoad.departure_date}T${dataOfRoad.departure_time}:00`
      );
      const timeDifference: number =
        arrivalDateTime.getTime() - departureDateTime.getTime();
      const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes: number = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      setHours(hours);
      setMinutes(minutes);
    }
  }, [dataOfRoad]);

  const fetchData = async () => {
    try {
      const res: IRoadData[] = await getRoad({ depCity, arrCity, dateOf });
      const selectedRoad = res.find((route) => route.id === Number(id));
      if (selectedRoad) {
        setDataOfRoad(selectedRoad);
      }
    } catch (error) {
      console.log("fetchingRoadData", error);
    }
  };
  console.log(token);
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (token === null) {
      alert("Пожалуйста зарегистрируйтесь");
      return 0;
    }
    if (
      surName.trim() === "" ||
      name.trim() === "" ||
      patronymic.trim() === "" ||
      dateOfBirth === "" ||
      citizenshipFor.trim() === "" ||
      document.trim() === "" ||
      docNum.trim() === "" ||
      selectedGender === "" ||
      place.trim() === ""
    ) {
      setError("Пожалуйста, заполните все обязательные поля.");
      return;
    } else {
      if (token && dataOfRoad) {
        try {
          const { price, ...roadId } = dataOfRoad;
          const documentType = {
            id: 1,
            documentName: document,
          };
          const citizenship = {
            id: 1,
            name: citizenshipFor,
            shortName: "Kaz",
          };
          await requsetOnTicket({
            token,
            roadId,
            name,
            surname: surName,
            patronymic,
            dateOfBirth,
            place,
            citizenship,
            documentType,
            numberOfDocument: docNum,
          });
          router.push("/final");
        } catch (error) {
          console.log(error);
        }
      }
    }

    setError("");
  };

  return (
    <>
      <main className={s.main}>
        <h2 className={s.title}>
          <Link
            href={`/routes/depCity=${depCity}&arrCity=${arrCity}&date=${dateOf}`}
            className={s.allRoads}
          >
            <Image src={list} alt="list" />
            <span>Все рейсы</span>
          </Link>
          <p>
            Покупка билетов на автобус из {depCity} в {arrCity}
          </p>
        </h2>
        <h2 className={s.info}>Информация о рейсе:</h2>
        <div className={s.road}>
          <div className={s.from}>
            <h3 className={s.time}>
              {dataOfRoad?.arrival_time}
              <span> {dataOfRoad?.arrival_date.slice(5, 11)}</span>
            </h3>
            <p className={s.busStation}>{depCity}, Автовокзал </p>
          </div>
          <div className={s.to}>
            <h3 className={s.time}>
              {dataOfRoad?.departure_time}
              <span> {dataOfRoad?.departure_date.slice(5, 11)}</span>
            </h3>
            <p className={s.busStation}>{arrCity}, Автовокзал </p>
          </div>
          <div className={s.timeInRoad}>
            {hours} ч {minutes && minutes > 0 ? `#${minutes} м` : ""} в пути
          </div>
          <div className={s.roadInfo}>
            <p className={s.price}>{dataOfRoad?.price} тг.</p>
            <p className={s.roadMore}>
              <span>
                {depCity}-{arrCity}
              </span>
            </p>
            <p className={s.company}> ООО "ТУРАН"</p>
            <p className={s.bus}> Хайгер_55м</p>
          </div>
        </div>
        <div className={s.date}>
          <h4 className={s.dateOfTravel}>Дата поездки</h4>
          <div className={s.setDate}>
            <input className={s.inputDate} disabled value={dateOfTrip} />
          </div>
          <p className={s.freeSits}>
            Свободных мест: 30 из {dataOfRoad?.bus_id.places}
          </p>
        </div>
        <div className={s.message}>
          Достаточно предоставить оригинал документа, по которому заполнялись
          данные пассажира. Однако, распечатанная маршрутная квитанция
          понадобится вам на автовокзале для возврата денежных средств в случае,
          если вы опоздаете на посадку.
        </div>
        <UserDataForm
          price={dataOfRoad ? dataOfRoad.price : 0}
          surName={surName}
          setSurName={setSurName}
          name={name}
          setName={setName}
          patronymic={patronymic}
          setPatronymic={setPatronymic}
          dataOfBirth={dateOfBirth}
          setDataOfBirth={setDateOfBirth}
          citizenship={citizenshipFor}
          setCitizenship={setCitizenshipFor}
          document={document}
          setDocument={setDocument}
          docNum={docNum}
          setDocNum={setDocNum}
          sitInBus={place}
          setSitInBus={setPlace}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          error={error}
          setError={setError}
          handleFormSubmit={handleFormSubmit}
        />
      </main>
    </>
  );
};

export default RoutePage;
