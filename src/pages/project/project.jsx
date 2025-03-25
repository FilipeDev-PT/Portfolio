import ItensProject from "./components/itensProject/itensProject";
import style from "./project.module.css";
import Layout from "../../components/layout/layout";
import appControle from "../../../public/AppControle.png";

export default function Project() {
  return (
    <Layout>
      <div className={style.divProject}>
        <ItensProject
          link={appControle}
          content={
            "Aplicativo de controle de obra, feito inteiramente por mim, sendo realizado todo o banco de dados, backend em C# e frontend em React. Aplicativo responsavel por consulta de medições, remanejamento de saldo de contratos (reformas), e um backend excluiso para criação de programações."
          }
          linkGitHub={"https://github.com/FilipeDev-PT/AppControle"}
          linkSite={"https://filipedev-pt.github.io/AppControle/"}
        />
      </div>
    </Layout>
  );
}
