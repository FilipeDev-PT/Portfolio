import style from "./layout.module.css";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./components/header/header";
import LateralNavigate from "./components/lateralNavigate/lateralNavigate";

export default function Layout({ children }) {
  const url = window.location.href;

  const urlPages = ["about", "skills", "projects"];

  const navigate = useNavigate();
  const [pagina, setPagina] = useState(
    url.split("/").pop() == "Postifolio"
      ? 0
      : parseInt(urlPages.indexOf(url.split("/").pop()))
  );

  const handleMoreNumberPage = () => {
    if (pagina < 2) {
      const page = pagina + 1;
      setPagina(page);
      const urlpage = urlPages[page];
      navigate(`/${urlpage}`);
    }
  };

  const handleLessNumberPage = () => {
    if (pagina > 0) {
      const page = pagina - 1;
      setPagina(page);
      const urlpage = urlPages[page];
      navigate(`/${urlpage}`);
    }
  };

  return (
    <>
      <div className={style.container}>
        <ChevronLeft
          className={style.iconsLeft}
          onClick={handleLessNumberPage}
        />
        <div className={style.conteinerContent}>
          <Header constPagina={setPagina} urlPageina={urlPages} />
          <div className={style.conteinerContentContent}>
            <LateralNavigate />
            <div className={style.conteinerContentChildren}>{children}</div>
          </div>
        </div>
        <ChevronRight
          className={style.iconsRight}
          onClick={handleMoreNumberPage}
        />
      </div>
    </>
  );
}
