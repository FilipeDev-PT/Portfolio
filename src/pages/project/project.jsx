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
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"
          }
        />
        <ItensProject
          link={appControle}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"
          }
        />
        <ItensProject
          link={appControle}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"
          }
        />
        <ItensProject
          link={appControle}
          content={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"
          }
        />
      </div>
    </Layout>
  );
}
