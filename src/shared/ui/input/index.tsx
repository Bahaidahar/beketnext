import { FC } from "react";
import { IInput } from "./model";

const Input: FC<IInput> = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      className={`outline-blue py-3 px-2 rounded-lg  shadow-sm text-black border border-gray `}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};
export default Input;
