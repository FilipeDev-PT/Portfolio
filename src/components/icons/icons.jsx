import * as LucideIcons from "lucide-react";
import style from "./icons.module.css";

export default function IconLabel({ name, link }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Ícone "${name}" não encontrado.`);
    return null;
  }

  return (
    <a href={link} target="_blank">
      <LucideIcon className={style.iconLateralNavigate} />
    </a>
  );
}
