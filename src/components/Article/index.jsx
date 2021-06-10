import React, {useEffect, useState} from 'react'
import Spinner from '../Spinner'
import Button from '../Button'

function Article(props) {
  const {isShow} = props
  const [data, setData] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((response) => setData(response))
    }, 5000)
  })
  return (
    <>
      {isShow && (
        <article className="container">
          <ul className="list-group">
            {data.length ? (
              data.map((item) => {
                return (
                  <li
                    className={
                      'list-group-item d-flex justify-content-between align-items-center list-group-item-action list-group-item-' +
                      (item.completed ? 'secondary' : 'success')
                    }
                    key={item.id}
                  >
                    {item.id}. {item.title}
                    <Button
                      classes={
                        'btn-sm ' +
                        (item.completed
                          ? 'btn-secondary disabled'
                          : 'btn-success')
                      }
                      disabled={item.completed}
                      title={item.completed ? 'Done' : 'Do it!'}
                    />
                  </li>
                )
              })
            ) : (
              <Spinner />
            )}
          </ul>
        </article>
      )}
    </>
  )
}

export default Article
