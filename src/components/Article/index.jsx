import React, { useEffect, useState } from "react";
import "./style.scss";

function Article(props) {
  const { isShow } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((response) => setData(response));
    }, 3000);
  });
  return (
    <article>
      <p className={isShow ? "show" : "hide"}>
        <ul>
          {data.length ? (
            data.map((item) => {
              return (
                <li className={item.completed ? "done" : ""} key={item.id}>
                  {item.title}
                </li>
              );
            })
          ) : (
            <div style={{ "text-align": "center" }}>Загружаю...</div>
          )}
        </ul>
      </p>
    </article>
  );
}

export default Article;
