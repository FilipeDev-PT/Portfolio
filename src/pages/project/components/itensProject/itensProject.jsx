import style from "./itensProject.module.css";
import IconLabel from "../../../../components/icons/icons";

export default function ItensProject({ link, content, linkGitHub, linkSite }) {
  return (
    <div className={style.divItensProject}>
      <img src={link} alt="" />
      <p>{content}</p>
      <div className={style.divIconsProject}>
        <IconLabel name={"Github"} link={linkGitHub} />
        <IconLabel name={"Globe"} link={linkSite} />
      </div>
    </div>
  );
}
