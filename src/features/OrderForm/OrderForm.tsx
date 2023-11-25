import Input from "./ui/Input/index";
import s from "./styles/index.module.scss";

const OrderForm = () => {
  const onClickButton = (e: any) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className={s.form}>
        <div className={s.first}>
          <Input name="Фамилия" />
          <Input name="Имя" />
          <Input name="Отчество" />
          <div className={s.selectGender}>
            <span className={s.label}>Пол *</span>
            <div className={s.selectBtns}>
              <button className={s.btn} onClick={(e) => onClickButton(e)}>
                М
              </button>
              <button className={s.btn} onClick={(e) => onClickButton(e)}>
                Ж
              </button>
            </div>
          </div>
        </div>
        <div className={s.second}>
          <div className={s.dateBirth}>
            <span className={s.label}>Дата рождения *</span>
            <div className={s.dMY}>
              <input className={s.inputDate} type="text" placeholder="День" />
              <input className={s.inputMonth} type="text" placeholder="Месяц" />
              <input className={s.inputYear} type="text" placeholder="Год" />
            </div>
          </div>
          <div className={s.citizenship}>
            <span className={s.label}>Гражданство *</span>
            <div className={s.inputHolder}>
              <input
                className={s.inputCitizen}
                type="text"
                placeholder="Казахстан"
              />
            </div>
          </div>
          <div className={s.document}>
            <span className={s.label}>Документ *</span>
            <input className={s.inputDoc} type="text" placeholder="Не указан" />
          </div>
          <div className={s.docNum}>
            <span className={s.label}>Номер документа *</span>
            <input className={s.inputDocNum} type="text" placeholder="" />
          </div>
        </div>
        <div className={s.line}></div>
        <div className={s.final}>
          <div className={s.check}>
            <div className={s.sitInBus}>
              <span className={s.label}>Место в автобусе *</span>
              <input className={s.inputSitInBus} placeholder="Выбрать" />
            </div>
            <div className={s.rate}>
              <span className={s.label}>Тариф</span>
              <p className={s.rateText}>
                Для уточнения тарифа выберите дату рождения.
              </p>
            </div>
          </div>
          <div>
            <p className={s.price}>5630.00 тг.</p>
          </div>
        </div>
      </div>
      <div className={s.btnCont}>
        <button className={s.addTravler}>Добавить второго пассажира</button>
      </div>
      <div className={s.btnCont}>
        <button className={s.rent}>Забронировать</button>
      </div>
    </form>
  );
};

export default OrderForm;
