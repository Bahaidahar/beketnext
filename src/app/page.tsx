"use client";

import { Footer } from "@/widgets";

import s from "./styles/index.module.scss";
import { BusForm } from "@/features";

const Page = () => {
  return (
    <>
      <main className={s.main}>
        <div className=" bg-black bg-opacity-60 p-4 max-w-4xl mx-auto flex flex-col items-center h-[87vh] sm:h-auto ">
          <h2 className=" text-3xl font-bold mt-8 text-center">
            Поиск расписаний автобусов
          </h2>
          <p className=" font-medium mt-4 text-center">
            Найти билеты легко и быстро на любой автобусный маршрут на
            территории Казахстана
          </p>
          <BusForm />
        </div>
      </main>
    </>
  );
};

export default Page;
