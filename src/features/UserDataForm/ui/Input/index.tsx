import s from "./index.module.scss";

interface iRoadInput {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ name, value, onChange }: iRoadInput) => {
  return (
    <div className={s.input_block}>
      <span className={s.name}>{name} *</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
