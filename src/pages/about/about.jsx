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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              itaque dignissimos quae qui pariatur recusandae, possimus earum
              quas cupiditate ea expedita, repudiandae sed ipsa deleniti ad
              repellendus quidem ipsum exercitationem!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
