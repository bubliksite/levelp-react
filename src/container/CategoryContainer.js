import React, {useState} from 'react'
import CategoryList from '../components/CategoryList'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {actionCreateCategory, actionDeleteCategory} from '../store/categories'

export default function CategoryContainer() {
  const categories = useSelector((state) => state.category)
  const match = useRouteMatch('/homework/:id')
  const todoId = +match.params.id
  const dispatch = useDispatch()
  const [change, setChange] = useState('')
  const [alert, setAlert] = useState(false)

  const handlerChangeInput = (e) => {
    setAlert(false)
    setChange(e.target.value)
  }
  const handlerAddCategory = (e) => {
    e.preventDefault()
    if (change) {
      const data = {
        id: Date.now(),
        title: change,
        checked: false,
        todoId
      }
      dispatch(actionCreateCategory(data))
      setChange('')
    } else {
      setAlert(true)
    }
  }
  const handlerDeleteCategory = (id) => {
    dispatch(actionDeleteCategory(id))
  }

  return (
    <CategoryList
      categories={categories}
      todoId={todoId}
      alert={alert}
      change={change}
      handlerChangeInput={handlerChangeInput}
      handlerAddCategory={handlerAddCategory}
      handlerDeleteCategory={handlerDeleteCategory}
    />
  )
}
