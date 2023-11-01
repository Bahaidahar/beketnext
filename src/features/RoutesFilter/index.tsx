import s from "./styles/index.module.scss";
import Image from "next/image";
import { select } from "@/shared";

const RoutesFilter = () => {
  return (
    <div className={s.filters}>
      <div className={s.filter}>
        Место отправления
        <Image className={s.select} src={select} alt="select" />
      </div>
      <div className={s.filter}>
        Время отправления
        <Image src={select} className={s.select} alt="select" />
      </div>
      <div className={s.filter}>
        Наличие билетов <Image src={select} className={s.select} alt="select" />
      </div>
      <div className={s.filter}>Показаны все рейсы</div>
    </div>
  );
};

export default RoutesFilter;
