"use client";

import { Footer, Header } from "@/widgets";

import s from "./styles/HomePage.module.scss";
import { BusForm } from "@/features";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <div className=" bg-black bg-opacity-60 p-4 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className=" text-3xl font-bold mt-8">
            Поиск расписаний автобусов
          </h2>
          <p className=" font-medium mt-4">
            Найти билеты легко и быстро на любой автобусный маршрут на
            территории Казахстана
          </p>
          <BusForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
