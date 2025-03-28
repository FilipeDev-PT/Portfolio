import style from "./header.module.css";
import { useNavigate } from "react-router";
import Buttons from "../buttons/buttons";

export default function Header({ constPagina, setConstPagina, urlPageina }) {
  const navigate = useNavigate();

  function handleButtonEspecific(id) {
    setConstPagina(id);
    const urlpage = urlPageina[id];
    navigate(`/${urlpage}`);
  }

  return (
    <header className={style.header}>
      <h3>Filipe Cristovam</h3>
      <div className={style.contentButtonsHeader}>
        <Buttons
          text={"About"}
          onClick={handleButtonEspecific}
          number={1}
          styles={constPagina}
          initial={`${constPagina == 1 ? "initial" : ""}`}
        />
        <Buttons
          text={"Skills"}
          onClick={handleButtonEspecific}
          number={2}
          styles={constPagina}
          initial={""}
        />
        <Buttons
          text={"Projects"}
          onClick={handleButtonEspecific}
          number={3}
          styles={constPagina}
          initial={""}
        />
      </div>
    </header>
  );
}
