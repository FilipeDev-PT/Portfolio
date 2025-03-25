import style from "./itensProject.module.css";
import IconLabel from "../../../../components/icons/icons";
import { useState } from "react";

export default function ItensProject({ link, content, linkGitHub, linkSite }) {
  const [imgSelect, setImgSelect] = useState(false);

  const handleImgFull = () => {
    setImgSelect(!imgSelect);
  };

  return (
    <div className={style.divItensProject}>
      {imgSelect ? (
        <div className={style.divCloseImg} onClick={handleImgFull}>
          <IconLabel name={"X"} />
        </div>
      ) : (
        ""
      )}
      <img
        src={link}
        alt=""
        onClick={handleImgFull}
        className={`${imgSelect ? style.imgSelect : ""}`}
      />
      <p>{content}</p>
      <div className={style.divIconsProject}>
        <IconLabel name={"Github"} link={linkGitHub} />
        <IconLabel name={"Globe"} link={linkSite} />
      </div>
    </div>
  );
}
