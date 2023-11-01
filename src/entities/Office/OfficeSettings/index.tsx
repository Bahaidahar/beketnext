import s from "./styles/index.module.scss";

const OfficeSettings = () => {
  return (
    <div className={s.settings}>
      <div className={s.first}>
        <div>
          <div>Имя:</div>
          <div>
            Новое имя: <input />
          </div>
        </div>
        <div>
          <div>Фамилия:</div>
          <div>
            Новая фамилия: <input />
          </div>
        </div>
        <button className={s.btn}>Сохранить</button>
      </div>
      <div className={s.second}>
        <h2>Изменение пароля</h2>
        <div>
          Старый пароль: <input />
        </div>
        <button className={s.btn}>Сохранить</button>
      </div>
    </div>
  );
};

export default OfficeSettings;
