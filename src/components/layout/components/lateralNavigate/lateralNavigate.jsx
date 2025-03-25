import style from "./lateralnavigate.module.css";
import IconLabel from "../../../icons/icons";

export default function LateralNavigate() {
  return (
    <div className={style.divLateralNavigate}>
      <IconLabel
        name={"Linkedin"}
        link={"https://www.linkedin.com/in/filipe-cristovam-6b5b7031a/"}
      />
      <IconLabel name={"Mail"} link={"mailto:filipe.dev.contact@gmail.com"} />
      <IconLabel name={"Phone"} link={"https://wa.me/5562981046068"} />
      <IconLabel name={"Github"} link={"https://github.com/FilipeDev-PT"} />
    </div>
  );
}
