"use client";
import { FC, useState } from "react";

import s from "./styles/index.module.scss";
import { Popup } from "../../model";
interface IHomeFinder {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const Finder: FC<IHomeFinder> = (props) => {
  const { value, setValue, placeholder } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <input
        className="outline-blue my-1 py-3 px-2 rounded-lg w-72 shadow-sm text-black border border-gray relative"
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
    </div>
  );
};

export default Finder;
