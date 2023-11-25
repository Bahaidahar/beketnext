"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Input, switchB } from "@/shared";
import { IData } from "./model";
import { Finder } from "./ui";
import { getTodayDateString, getTomorrowDateString } from "@/shared";

const RoutesForm: FC<IData> = ({ depCity, arrCity, dateOf }) => {
  const [cityFrom, setCityFrom] = useState(depCity);
  const [cityTo, setCityTo] = useState(arrCity);
  const [date, setDate] = useState(dateOf);
  const [message, setMessage] = useState({ text: "", open: false });
  const router = useRouter();
  const cityNames = ["Almaty", "Astana", "Shymkent", "Taraz"];
  const onClickSwapCities = () => {
    setCityTo(cityFrom);
    setCityFrom(cityTo);
  };

  const onClickNavigate = () => {
    if (cityFrom === cityTo && cityFrom !== "") {
      setMessage((prevState) => ({
        ...prevState,
        text: "Названия городов должны отличаться",
        open: true,
      }));
    } else if (!cityNames.includes(cityFrom) || !cityNames.includes(cityTo)) {
      setMessage((prevState) => ({
        ...prevState,
        text: "Выберите города из списка",

        open: true,
      }));
    } else if (cityFrom && cityTo) {
      router.push(`depCity=${cityFrom}&arrCity=${cityTo}&date=${date}`);
    } else {
      setMessage((prevState) => ({
        ...prevState,
        text: "Выберите два города",
        open: true,
      }));
    }
  };
  return (
    <form
      className=" mt-5 pb-7 max-w-7xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      {message.open ? (
        <div className=" block p-4 bg-error text-center transition-all duration-300 rounded-md">
          {message.text}
        </div>
      ) : (
        " "
      )}
      <div className="flex gap-3 flex-wrap justify-center">
        <div className=" flex gap-3 flex-wrap justify-center">
          <div className="flex gap-3 items-start ">
            <Finder
              value={cityFrom}
              setValue={setCityFrom}
              placeholder="Откуда"
            />
            <Image
              src={switchB}
              alt="switchCity"
              className="cursor-pointer w-7 pt-3"
              onClick={onClickSwapCities}
            />
            <Finder value={cityTo} setValue={setCityTo} placeholder="Куда" />
          </div>
          <div className=" relative mb-6">
            <Input
              width="36"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder=""
              type="date"
            />
            <p className="font-medium text-[0.6rem] mt-2 absolute left-3">
              <span
                className=" text-blue border-dotted border-b-2 -tracking-tighter cursor-pointer hover:opacity-60"
                onClick={() => setDate(getTodayDateString())}
              >
                Сегодня
              </span>
              ,{" "}
              <span
                className=" text-blue border-dotted border-b-2 -tracking-tighter cursor-pointer hover:opacity-60"
                onClick={() => setDate(getTomorrowDateString())}
              >
                Завтра
              </span>
            </p>
          </div>
        </div>
        <Button width="w-50" onClick={onClickNavigate}>
          Найти
        </Button>
      </div>
    </form>
  );
};

export default RoutesForm;
