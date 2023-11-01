import s from "./styles/index.module.scss";

import Link from "next/link";

import Image from "next/image";
import { place, list } from "@/shared";
import UserDataForm from "@/features/UserDataForm";
import { Header } from "@/widgets";

const RoutePage = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <h2 className={s.title}>
          <Link href="/buses" className={s.allRoads}>
            <Image src={list} alt="list" />
            <span>Все рейсы</span>
          </Link>
          <h3>Покупка билетов на автобус из Алматы в Астану</h3>
        </h2>
        <h2 className={s.info}>Информация о рейсе:</h2>
        <div className={s.road}>
          <div className={s.from}>
            <h3 className={s.time}>
              10:00
              <span>23/07</span>
            </h3>
            <p className={s.busStation}>
              Алматы, Автовокзал 
              <span>
                <Image src={place} alt="place" />
              </span>
            </p>
          </div>
          <div className={s.to}>
            <h3 className={s.time}>
              05:30
              <span>24/07</span>
            </h3>
            <p className={s.busStation}>
              Астана, Автовокзал 
              <span>
                <Image src={place} alt="place" />
              </span>
            </p>
          </div>
          <div className={s.timeInRoad}>19ч 30м в пути</div>
          <div className={s.roadInfo}>
            <p className={s.price}>20000.00 тг.</p>
            <p className={s.roadMore}>
              Подробно о маршруте <span>Алматы - Астана</span>
            </p>
            <p className={s.company}>Компания: ООО "ТУРАН"</p>
            <p className={s.bus}>Автобус: Хайгер_55м</p>
          </div>
        </div>
        <div className={s.date}>
          <h4 className={s.dateOfTravel}>Выберите дату поездки</h4>
          <div className={s.setDate}>
            <input className={s.inputDate} type="date" />
            <button className={s.dateBtn}>Выбрать дату</button>
          </div>
          <p className={s.freeSits}>Свободных мест: 50 из 52</p>
        </div>
        <div className={s.message}>
          Достаточно предоставить оригинал документа, по которому заполнялись
          данные пассажира. Однако, распечатанная маршрутная квитанция
          понадобится вам на автовокзале для возврата денежных средств в случае,
          если вы опоздаете на посадку.
        </div>
        <UserDataForm />
      </main>
    </>
  );
};

export default RoutePage;
