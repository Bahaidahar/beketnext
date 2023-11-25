import { FC } from "react";

import s from "./RoadInput.module.css";

interface iRoadInput {
  name: string;
}

const RoadInput: FC<iRoadInput> = ({ name }) => {
  return (
    <div className={s.input_block}>
      <span className={s.name}>{name} *</span>
      <input className={s.input} type="text" />
    </div>
  );
};

export default RoadInput;
