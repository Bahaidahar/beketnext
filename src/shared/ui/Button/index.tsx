import { FC } from "react";
import { IButton } from "./model";

const Button: FC<IButton> = ({ width, children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={` bg-blue ${width} h-12 text-lg py-2.5 px-6 rounded-lg text hover:shadow-lg hover:opacity-80 text-white transition duration-300 italic`}
    >
      {children}
    </button>
  );
};

export default Button;
