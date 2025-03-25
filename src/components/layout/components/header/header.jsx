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
          text={"ABOUT"}
          onClick={handleButtonEspecific}
          number={1}
          styles={constPagina}
        />
        <Buttons
          text={"SKILLS"}
          onClick={handleButtonEspecific}
          number={2}
          styles={constPagina}
        />
        <Buttons
          text={"PROJECTS"}
          onClick={handleButtonEspecific}
          number={3}
          styles={constPagina}
        />
      </div>
    </header>
  );
}
