import style from "./layout.module.css";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./components/header/header";
import LateralNavigate from "./components/lateralNavigate/lateralNavigate";

export default function Layout({ children }) {
  const url = window.location.href;

  const urlPages = ["Portfolio", "about", "skills", "projects"];

  const [leftChevron, setLeftChevron] = useState(
    parseInt(urlPages.indexOf(url.split("/").pop())) > 1 ? true : false
  );
  const [rightChevron, setRightChevron] = useState(
    parseInt(urlPages.indexOf(url.split("/").pop())) < 3 ||
      url.split("/").pop() === ""
      ? true
      : false
  );

  const navigate = useNavigate();

  const [pagina, setPagina] = useState(
    url.split("/").pop() == "Portfolio"
      ? 1
      : parseInt(urlPages.indexOf(url.split("/").pop()))
  );

  const handleMoreNumberPage = () => {
    if (pagina < 3) {
      const page = pagina + 1;
      if (page == 3) {
        setRightChevron(false);
      } else {
        setRightChevron(true);
      }
      if (page > 1) {
        setLeftChevron(true);
      } else {
        setLeftChevron(false);
      }
      setPagina(page);
      const urlpage = urlPages[page];
      navigate(`/${urlpage}`);
    }
  };

  const handleLessNumberPage = () => {
    if (pagina > 1) {
      const page = pagina - 1;
      if (page == 1) {
        setLeftChevron(false);
      } else {
        setLeftChevron(true);
      }
      if (page < 3) {
        setRightChevron(true);
      } else {
        setRightChevron(false);
      }
      setPagina(page);
      const urlpage = urlPages[page];
      navigate(`/${urlpage}`);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.divIconsChevron}>
          {leftChevron ? (
            <ChevronLeft
              className={style.iconsLeft}
              onClick={handleLessNumberPage}
            />
          ) : (
            ""
          )}
        </div>
        <div className={style.conteinerContent}>
          <Header
            constPagina={pagina}
            setConstPagina={setPagina}
            urlPageina={urlPages}
          />
          <div className={style.conteinerContentContent}>
            <LateralNavigate />
            <div className={style.conteinerContentChildren}>{children}</div>
          </div>
        </div>
        <div className={style.divIconsChevron}>
          {rightChevron ? (
            <ChevronRight
              className={style.iconsRight}
              onClick={handleMoreNumberPage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
