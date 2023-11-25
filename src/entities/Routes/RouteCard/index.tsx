"use client";
import s from "./styles/inde.module.scss";
import Image from "next/image";
import { place1 } from "@/shared";
import { start } from "@/shared";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface IRoadData {
  id: number;
  price: number;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
  depCity: string;
  arrCity: string;
  dateOf: string;
}

const RouteCard: FC<IRoadData> = (props) => {
  const {
    id,
    price,
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    depCity,
    arrCity,
    dateOf,
  } = props;
  // const [hours, setHours] = useState<number>();
  // const [minutes, setMinutes] = useState<number>();
  // useEffect(() => {
  //   const arrivalDateTime: Date = new Date(
  //     `${arrival_date}T${arrival_time}:00`
  //   );
  //   const departureDateTime: Date = new Date(
  //     `${departure_date}T${departure_time}:00`
  //   );
  //   const timeDifference: number =
  //     arrivalDateTime.getTime() - departureDateTime.getTime();
  //   const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
  //   let minutes: number = Math.floor(
  //     (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  //   );

  //   setHours(hours);
  //   setMinutes(minutes);
  // }, []);

  return (
    <tbody className={s.bus_block}>
      <tr className={s.bus_main}>
        <td>
          <div className=" flex flex-col items-center">
            <p className={s.time}>
              {departure_time}
              <span> {departure_date.slice(5, 11)}</span>
            </p>
            <p className={s.auto_vogz}>
              Автовокзал <Image src={place1} alt="place" width={10} />
            </p>
          </div>
        </td>
        <td>
          <div className="flex flex-col items-center">
            <p className={s.time}>
              {arrival_time}
              <span> {arrival_date.slice(5, 11)}</span>
            </p>
            <p className={s.auto_vogz}>
              Автовокзал <Image src={place1} alt="place" width={10} />
            </p>
          </div>
        </td>
        <td className={s.cost}>{price}</td>
        <td>
          <Link
            href={`/route/depCity=${depCity}&arrCity=${arrCity}&date=${dateOf}&id=${id}`}
          >
            <button className={s.btn}>
              Купить билет <br /> <span>≈5 мест</span>
            </button>
          </Link>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <div className={s.line}></div>
        </td>
      </tr>
      <tr className={s.bus_more}>
        <td colSpan={1} className=" flex flex-row">
          <Image src={start} alt="start" /> 4.3
        </td>
        <td colSpan={1}>
          {" "}
          <span className={s.organization}>ООО "ТУРАН" </span>
        </td>
        <td rowSpan={1}></td>
        <td className={s.more_road} colSpan={1}>
          Подробнее о маршруте
        </td>
      </tr>
    </tbody>
  );
};

export default RouteCard;
