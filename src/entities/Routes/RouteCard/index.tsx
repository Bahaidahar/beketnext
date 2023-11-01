"use client";
import s from "./styles/inde.module.scss";
import Image from "next/image";
import { place } from "@/shared";
import { start } from "@/shared";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import moment from "moment";

interface IRoadData {
  price: number;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
}

const RouteCard: FC<IRoadData> = (props) => {
  const { price, arrival_date, arrival_time, departure_date, departure_time } =
    props;
  const [timeIn, setTimeIn] = useState("");
  useEffect(() => {
    const arrivalDateTime: Date = new Date(
      `${arrival_date}T${arrival_time}:00`
    );
    console.log(arrivalDateTime);
    const departureDateTime: Date = new Date(
      `${departure_date}T${departure_time}:00`
    );
    console.log(departureDateTime);
    const timeDifference: number =
      arrivalDateTime.getTime() - departureDateTime.getTime();
    console.log(timeDifference);
    const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes: number = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const res = `${hours}:${minutes}`;
    setTimeIn(res);
  }, []);

  return (
    <tbody className={s.bus_block}>
      <tr className={s.bus_main}>
        <td>
          <div className=" flex flex-col items-center">
            <p className={s.time}>
              {departure_time} <span>{departure_date}</span>
            </p>
            <p className={s.auto_vogz}>
              Автовокзал <Image src={place} alt="place" />
            </p>
          </div>
        </td>
        <td>
          <div className="flex flex-col items-center">
            <p className={s.time}>
              {arrival_time}
              <span>{arrival_date}</span>
            </p>
            <p className={s.auto_vogz}>
              Автовокзал <Image src={place} alt="place" />
            </p>
          </div>
        </td>
        <td className={s.time_in}>{timeIn} часов</td>
        <td className={s.days}>
          Июль (с 23): нечётные числа; <br /> Август (по 20): чётные числа
        </td>
        <td className={s.cost}>{price}</td>
        <td>
          <Link href="/route/jopa">
            <button className={s.btn}>
              Купить билет <br /> <span>≈5 мест</span>
            </button>
          </Link>
        </td>
      </tr>
      <tr>
        <td colSpan={6}>
          <div className={s.line}></div>
        </td>
      </tr>
      <tr className={s.bus_more}>
        <td colSpan={1}>
          <div className={`flex flex-row items-center`}>
            <Image src={start} alt="start" /> 4.3
            <span className={s.organization}>ООО "ТУРАН" </span>
          </div>
        </td>
        <td rowSpan={1}></td>
        <td rowSpan={1}></td>
        <td rowSpan={1}></td>
        <td className={s.more_road} colSpan={1}>
          Подробнее о маршруте
        </td>
      </tr>
    </tbody>
  );
};

export default RouteCard;
