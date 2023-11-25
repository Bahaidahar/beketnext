"use client";

import { RouteCard } from "@/entities";
import { RoutesForm, RoutesFilter } from "@/features";

import s from "./styles/index.module.scss";
import { IData } from "./model";

import moment from "moment";
import "moment/locale/ru"; // Импортируйте локаль для русского языка
import { FC, useEffect, useState } from "react";
import { getRoad } from "@/shared/api";

interface IRoadData {
  id: number;
  price: number;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
}
const formatDate = (dateString: string) => {
  const formattedDate = moment(dateString)
    .locale("ru")
    .format("D MMMM YYYY, dddd");
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Делаем первую букву месяца заглавной
};

const RoutesPage: FC<IData> = ({ depCity, arrCity, dateOf }) => {
  const [routes, setRoutes] = useState<IRoadData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await getRoad({ depCity, arrCity, dateOf });
      setRoutes(res);
      console.log(res);
    } catch (error) {
      console.log("fetchingRoadData", error);
    }
  };
  const formatted = formatDate(dateOf);
  return (
    <>
      <main className={s.main}>
        <RoutesForm dateOf={dateOf} depCity={depCity} arrCity={arrCity} />
        {/* <RoutesFilter /> */}
        {routes.length > 0 ? (
          <>
            <div className={s.info}>
              <h2>Расписание автобусов</h2>
              <p>{formatted}</p>
              <h2 className={s.title}>
                {depCity} - {arrCity}
              </h2>
            </div>
            <table className={s.table}>
              <thead className={s.menu}>
                <tr>
                  <th>Отправление</th>
                  <th>Прибытие </th>
                  <th>Цена</th>
                  <th>Найдено {routes.length} рейсов</th>
                </tr>
              </thead>
              {routes.map((route) => (
                <RouteCard
                  id={route.id}
                  key={route.id}
                  price={route.price}
                  arrival_date={route.arrival_date}
                  arrival_time={route.arrival_time}
                  departure_date={route.departure_date}
                  departure_time={route.departure_time}
                  depCity={depCity}
                  arrCity={arrCity}
                  dateOf={dateOf}
                />
              ))}
            </table>
          </>
        ) : (
          <div className="text-center text-lg bg-blue text-white max-w-2xl mx-auto mt-10 p-6 rounded-lg">
            Прости но у нас нету таких маршрутов
          </div>
        )}
      </main>
    </>
  );
};

export default RoutesPage;
