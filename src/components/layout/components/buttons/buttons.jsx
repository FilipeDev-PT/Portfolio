import style from "./buttons.module.css";

export default function Buttons({ initial, text, onClick, number, styles }) {
  return (
    <button
      className={`${style.buttonsHeaderNavigate} ${
        styles == number || initial != ""
          ? style.buttonsHeaderNavigateActive
          : ""
      }`}
      onClick={() => onClick(number)}
    >
      {text}
    </button>
  );
}
