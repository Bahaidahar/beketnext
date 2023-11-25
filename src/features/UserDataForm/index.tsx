"use client";

import { Input } from "./ui";
import s from "./styles/index.module.scss";

interface Props {
  surName: string;
  setSurName: (surName: string) => void;
  name: string;
  setName: (name: string) => void;
  patronymic: string;
  setPatronymic: (patronym: string) => void;
  dataOfBirth: string;
  setDataOfBirth: (dataOfBirth: string) => void;
  citizenship: string;
  setCitizenship: (citizenship: string) => void;
  document: string;
  setDocument: (document: string) => void;
  docNum: string;
  setDocNum: (docNum: string) => void;
  sitInBus: string;
  setSitInBus: (sitInBus: string) => void;
  selectedGender: string;
  setSelectedGender: (selectedGender: string) => void;
  error: string;
  setError: (error: string) => void;
  price: number;
  handleFormSubmit: (e) => void;
}

const UserDataForm = (props: Props) => {
  const {
    surName,
    setSurName,
    name,
    setName,
    setPatronymic,
    patronymic,
    dataOfBirth,
    setDataOfBirth,
    citizenship,
    setCitizenship,
    document,
    setDocument,
    docNum,
    setDocNum,
    sitInBus,
    setSitInBus,
    selectedGender,
    setSelectedGender,
    error,
    price,
    handleFormSubmit,
  } = props;

  const handleButtonClick = (gender: string, e) => {
    e.preventDefault();
    setSelectedGender(gender);
  };
  const handleDateChange = (e) => {
    const newDateValue = e.target.value;
    setDataOfBirth(newDateValue);
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className={s.form}>
        <div className={s.first}>
          <Input name="Фамилия" value={surName} onChange={setSurName} />
          <Input name="Имя" value={name} onChange={setName} />
          <Input name="Отчество" value={patronymic} onChange={setPatronymic} />
          <div className={s.selectGender}>
            <span className={s.label}>Пол *</span>
            <div className={s.selectBtns}>
              <button
                className={`${s.btn} ${
                  selectedGender === "М" ? s.selectedBtn : ""
                }`}
                onClick={(e) => handleButtonClick("М", e)}
              >
                М
              </button>
              <button
                className={`${s.btn} ${
                  selectedGender === "Ж" ? s.selectedBtn : ""
                }`}
                onClick={(e) => handleButtonClick("Ж", e)}
              >
                Ж
              </button>
            </div>
          </div>
        </div>
        <div className={s.second}>
          <div className={s.dateBirth}>
            <span className={s.label}>Возраст *</span>
            <div className={s.dMY}>
              <input
                type="date"
                className={s.inputDate}
                value={dataOfBirth}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className={s.citizenship}>
            <span className={s.label}>Гражданство *</span>
            <div className={s.inputHolder}>
              <input
                className={s.inputCitizen}
                type="text"
                placeholder="Казахстан"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
              />
            </div>
          </div>
          <div className={s.document}>
            <span className={s.label}>Документ *</span>
            <input
              className={s.inputDoc}
              type="text"
              placeholder="Не указан"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            />
          </div>
          <div className={s.docNum}>
            <span className={s.label}>Номер документа *</span>
            <input
              className={s.inputDocNum}
              type="text"
              placeholder=""
              value={docNum}
              onChange={(e) => setDocNum(e.target.value)}
            />
          </div>
        </div>
        <div className={s.line}></div>
        <div className={s.final}>
          <div className={s.check}>
            <div className={s.sitInBus}>
              <span className={s.label}>Место в автобусе *</span>
              <input
                className={s.inputSitInBus}
                placeholder="Выбрать"
                value={sitInBus}
                onChange={(e) => setSitInBus(e.target.value)}
              />
            </div>
            {/* <div className={s.rate}>
              <span className={s.label}>Тариф</span>
              <p className={s.rateText}>
                Для уточнения тарифа выберите дату рождения.
              </p>
            </div> */}
          </div>
          <div>
            <p className={s.price}>{price} тг.</p>
          </div>
        </div>
        {error && (
          <div className="text-center text-white bg-error py-2 px-4 w-72 mx-auto rounded-lg">
            {error}
          </div>
        )}
      </div>
      {/* <div className={s.btnCont}>
        <button className={s.addTravler}>Добавить второго пассажира</button>
      </div> */}
      <div className={s.btnCont}>
        <button className={s.rent}>Забронировать</button>
      </div>
    </form>
  );
};

export default UserDataForm;
