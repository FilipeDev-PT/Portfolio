import style from "./buttons.module.css";

export default function Buttons({ text, onClick, number, styles }) {
  return (
    <button
      className={`${style.buttonsHeaderNavigate} ${
        styles == number ? style.buttonsHeaderNavigateActive : ""
      }`}
      onClick={() => onClick(number)}
    >
      {text}
    </button>
  );
}
