import style from "./buttons.module.css";

export default function Buttons({ text, onClick, number }) {
  return (
    <button
      className={style.buttonsHeaderNavigate}
      onClick={() => onClick(number)}
    >
      {text}
    </button>
  );
}
