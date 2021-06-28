import React, {useState} from 'react'
import CategoryList from '../components/CategoryList'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {
  actionCreateCategory,
  actionDeleteCategory,
  editCategory
} from '../store/categories'

export default function CategoryContainer() {
  const categories = useSelector((state) => state.category)
  const match = useRouteMatch('/homework/:id')
  const todoId = +match?.params.id
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
  const handlerEditCategoryChecked = (categoryId, checked) => {
    const data = {
      checked: !checked,
      id: categoryId
    }
    dispatch(editCategory(data))
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
      handlerEditCategoryChecked={handlerEditCategoryChecked}
      handlerDeleteCategory={handlerDeleteCategory}
    />
  )
}
