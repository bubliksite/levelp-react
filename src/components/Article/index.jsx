import React, { useEffect, useState } from "react";
import "./style.css";

function Article(props) {
  const { isShow } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => setData(response));
  });
  return (
    <article>
      <p className={isShow ? "show" : "hide"}>
        <ul>
          {data.map((item) => {
            return (
              <li className={item.completed ? "done" : ""} key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </p>
    </article>
  );
}

export default Article;
