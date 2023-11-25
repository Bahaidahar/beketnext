"use clinet";

import { useEffect, FC, useRef, useState } from "react";

import s from "./styles/index.module.scss";

import { useClickOutside } from "@/shared";

import { getAllCities } from "@/shared";

interface IPopup {
  isPopupOpen: boolean;
  togglePopup: () => void;
  onClose: () => void;
  value: string;
  setValue: (value: string) => void;
}

interface ICities {
  name: string;
  id: number;
}
const Popup: FC<IPopup> = (props) => {
  const { isPopupOpen, togglePopup, onClose, value, setValue } = props;
  const [cities, setCities] = useState<ICities[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      getAllCities().then((data) => setCities(data));
    } catch (error) {
      console.log("gettinAllCities", error);
    }
  };

  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(popupRef, onClose, isPopupOpen);

  const handlecClick = (value: string) => {
    togglePopup();
    setValue(value);
  };

  return (
    <div
      ref={popupRef}
      className={isPopupOpen ? s.modalContainerActive : s.modalContainer}
    >
      <ul className={s.modal}>
        {cities ? (
          cities
            .filter((filteredCity) =>
              filteredCity.name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase())
            )
            .map((city) => (
              <li
                className={s.city}
                key={city.id}
                onClick={() => handlecClick(city.name)}
              >
                {city.name},<span> Kazakhstan</span>
              </li>
            ))
        ) : (
          <p className=" w-50 p-4">Ошибка загрузки...</p>
        )}
      </ul>
    </div>
  );
};

export default Popup;
