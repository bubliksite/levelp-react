import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

function Article(props) {
  const { isShow } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((response) => setData(response));
    }, 5000);
  });
  return (
    <article>
      <p className={isShow ? "show" : "hide"}>
        <ul>
          {data.length ? (
            data.map((item) => {
              return (
                <li className={item.completed ? "done" : ""} key={item.id}>
                  <p>
                    {item.id}. {item.title}
                  </p>
                  <Button
                    className={item.completed ? "btn-secondary" : "btn-success"}
                    disabled={item.completed ? "disabled" : ""}
                  >
                    {item.completed ? "Done" : "Do it!"}
                  </Button>
                </li>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </ul>
      </p>
    </article>
  );
}

export default Article;
