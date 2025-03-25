import Layout from "../../components/layout/layout";
import style from "./about.module.css";
import imgPessoal from "../../../public/Img_Pessoal.png";

export default function About() {
  return (
    <Layout>
      <div className={style.divContentAbout}>
        <div className={style.divImg}>
          <img src={imgPessoal} alt="" className={style.imgAbout} />
        </div>
        <div className={style.divContentTitle}>
          <div>
            <h3>Frontend</h3>
            <h4>Developer</h4>
          </div>
          <div>
            <p>
              Olá, eu sou Filipe. Desenvolvo projetos em React, principalmente.
              Participei da criação de aplicações de controle de obra para a
              FGR, desenvolvi soluções de problemas financeiros, contábeis e de
              produção, tanto para a G.A. Silva quanto para a FGR. Sou um amante
              por tecnologia e amo receber novos desafios. Busco uma empresa
              onde consiga desenvolver minhas habilidades como programador,
              evoluir e no futuro liderar equipes de desenvolvimento, para assim
              ajudar no crescimento da empresa.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
