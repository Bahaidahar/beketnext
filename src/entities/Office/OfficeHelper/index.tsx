import s from "./styles/index.module.scss";

const OfficeHelper = () => {
  return (
    <div className={s.helper}>
      <div>
        Чтобы найти интересующий вас маршрут воспользуйтесь{" "}
        <span>формой поиска</span>.
      </div>
      <div>
        Чтобы вернуть билет или проверить статус заявки на возврат (в случае
        если вы делали заказы до регистрации) воспользуйтесь{" "}
        <span>поиском по билетам</span>.
      </div>
    </div>
  );
};

export default OfficeHelper;
