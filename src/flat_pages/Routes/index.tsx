"use client";

import { RouteCard } from "@/entities";
import { RoutesForm, RoutesFilter } from "@/features";

import s from "./styles/index.module.scss";
import { IData } from "./model";

import { Header } from "@/widgets";
import { FC, useEffect, useState } from "react";
import { getRoad } from "./api";

interface IRoadData {
  id: number;
  price: number;
  arrival_date: string;
  arrival_time: string;
  departure_date: string;
  departure_time: string;
}

const RoutesPage: FC<IData> = ({ depCity, arrCity, dateOf }) => {
  const [routes, setRoutes] = useState<IRoadData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRoad({ depCity, arrCity, dateOf });
        setRoutes(res);
        console.log(res);
      } catch (error) {
        console.log("fetchingRoadData", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className={s.main}>
        <RoutesForm dateOf={dateOf} depCity={depCity} arrCity={arrCity} />
        <RoutesFilter />
        {routes.length > 0 ? (
          <>
            <div className={s.info}>
              <h2>Расписание автобусов</h2>
              <h2 className={s.title}>Алматы - Астана</h2>
              <p>2023, 11, 1 , среда</p>
            </div>
            <table className={s.table}>
              <thead className={s.menu}>
                <tr>
                  <th>Отправление</th>
                  <th>Прибытие </th>
                  <th>Время в пути </th>
                  <th>Дни отправления</th>
                  <th>Цена</th>
                  <th>Найдено {routes.length} рейсов</th>
                </tr>
              </thead>
              {routes.map((route) => (
                <RouteCard
                  key={route.id}
                  price={route.price}
                  arrival_date={route.arrival_date}
                  arrival_time={route.arrival_time}
                  departure_date={route.departure_date}
                  departure_time={route.departure_time}
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
