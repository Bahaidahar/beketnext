"use client";
import { FC, useState } from "react";

import s from "./styles/index.module.scss";
import { Popup } from "../../model";

interface IHomeFinder {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  exampleCity: string;
}

const Finder: FC<IHomeFinder> = (props) => {
  const { value, setValue, placeholder, exampleCity } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const onClickExampleCity = () => {
    setValue(exampleCity);
  };

  return (
    <div className=" mb-6">
      <input
        className="outline-blue  py-3 px-2 rounded-lg w-36 shadow-sm text-black border border-gray relative"
        onClick={togglePopup}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <Popup
        isPopupOpen={isPopupOpen}
        togglePopup={togglePopup}
        onClose={() => setIsPopupOpen(false)}
        value={value}
        setValue={setValue}
      />
      <p
        className=" absolute text-[0.8rem] text-gray mt-1"
        onClick={onClickExampleCity}
      >
        Напиример: <span className={s.word}>{exampleCity}</span>
      </p>
    </div>
  );
};

export default Finder;
