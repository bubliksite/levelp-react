import React from "react";
import "./style.css";

function Article(props) {
  const { isShow } = props;
  return (
    <article>
      <p className={isShow ? "show" : "hide"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque
        magnam minima praesentium repellendus. A ab, accusantium animi
        asperiores at blanditiis corporis culpa deleniti dicta dolor eius eum
        explicabo facilis fuga iusto molestiae mollitia natus neque, officiis
        perspiciatis possimus praesentium quam quos sed sequi similique suscipit
        ullam veritatis vero voluptate. Aspernatur cumque dicta labore molestiae
        quasi. Consequatur maxime pariatur quaerat repellendus. Assumenda
        debitis impedit ipsa ipsam, minus, neque nulla praesentium quas qui quis
        reprehenderit repudiandae sapiente vero! Accusamus aperiam, consectetur
        consequuntur cum dignissimos doloremque fuga fugit, hic illo magni minus
        neque, obcaecati odio! Accusamus assumenda distinctio dolorem dolorum,
        ex facilis hic nam neque quaerat quis, ratione, sunt. Ab aliquam
        consequuntur, cumque eius expedita impedit maiores nisi odit
        reprehenderit sapiente similique, soluta, sunt totam ullam unde! Aut
        blanditiis eius, expedita magni natus sequi similique veniam. Laudantium
        molestias nihil quisquam rem voluptatibus. Ex facere officia optio quam
        vero! Ducimus eum hic laboriosam natus rerum. Adipisci amet aut
        consequatur, cum debitis dolores dolorum, eligendi maiores nam non
        numquam officia provident quas, quia sed. Delectus eius, harum iste
        iusto laborum minus, quam quasi quos reiciendis, soluta tempora velit!
        Aliquam eos, eveniet fugit ipsum itaque nam nesciunt nostrum, porro
        provident quas quibusdam quidem quod similique?
      </p>
    </article>
  );
}

export default Article;
