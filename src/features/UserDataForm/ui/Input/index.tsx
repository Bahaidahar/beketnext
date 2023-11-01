import s from "./index.module.scss";

interface iRoadInput {
  name: string;
}

export const Input = ({ name }: iRoadInput) => {
  return (
    <div className={s.input_block}>
      <span className={s.name}>{name} *</span>
      <input className={s.input} type="text" />
    </div>
  );
};
