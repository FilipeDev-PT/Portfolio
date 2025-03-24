import Layout from "../../components/layout/layout";
import style from "./skills.module.css";
import Skill from "./compnents/skill/skill";
import react from "../../../public/React.png";
import js from "../../../public/javaScript.png";
import html from "../../../public/HTML.png";
import css from "../../../public/CSS.png";
import git from "../../../public/GIT.png";

export default function Skills() {
  return (
    <Layout>
      <div className={style.divContentSkills}>
        <Skill
          link={react}
          content={
            "React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário dinâmicas e interativas. Ela facilita a criação de componentes reutilizáveis e a gestão eficiente de estados. React é amplamente usada em desenvolvimento web e mobile (com React Native), especialmente em aplicações de página única (SPA) devido à sua alta performance e escalabilidade."
          }
        />
        <Skill
          link={js}
          content={
            "JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade e dinamismo em páginas web. Com ela, é possível manipular elementos HTML, validar formulários e criar animações, entre outras funcionalidades. JavaScript é essencial para o desenvolvimento frontend e pode ser usado tanto no navegador quanto no backend (com Node.js)."
          }
        />
        <Skill
          link={html}
          content={
            "HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar conteúdo na web. Ela define elementos como títulos, parágrafos, listas, links e imagens, formando a base de qualquer página web. HTML é fundamental para criar a estrutura de uma página, que pode ser estilizada com CSS e tornada interativa com JavaScript."
          }
        />
        <Skill
          link={css}
          content={
            "CSS (Cascading Style Sheets) é uma linguagem usada para estilizar a aparência de páginas web. Com CSS, é possível controlar aspectos visuais como cores, fontes, espaçamento, layout e responsividade. Ele trabalha em conjunto com HTML para definir o design e a disposição dos elementos, tornando as páginas mais atraentes e funcionais em diferentes dispositivos."
          }
        />
        <Skill
          link={git}
          content={
            "Git é um sistema de controle de versão distribuído que permite rastrear alterações no código-fonte ao longo do tempo. Ele facilita a colaboração entre desenvolvedores, permitindo o gerenciamento de versões, a criação de ramificações (branches) e a fusão de mudanças (merges). Git é amplamente utilizado em projetos de software, especialmente quando há várias pessoas envolvidas no desenvolvimento."
          }
        />
      </div>
    </Layout>
  );
}
