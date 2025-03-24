import style from "./itensProject.module.css";

export default function ItensProject({ link, content }) {
  return (
    <div className={style.divItensProject}>
      <img src={link} alt="" />
      <p>{content}</p>
    </div>
  );
}
