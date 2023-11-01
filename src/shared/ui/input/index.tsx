import { FC } from "react";
import { IInput } from "./model";

const Input: FC<IInput> = ({ placeholder, value, onChange, type, width }) => {
  return (
    <input
      className={`outline-blue my-1 py-3 px-2 rounded-lg ${width} shadow-sm text-black border border-gray`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};
export default Input;
