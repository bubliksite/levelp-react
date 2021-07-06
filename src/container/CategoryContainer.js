import React, {useState} from 'react'
import CategoryList from '../components/CategoryList'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch, useLocation} from 'react-router-dom'
import {
  actionCreateCategory,
  actionDeleteCategory,
  editCategory
} from '../store/categories'
import {getCategory} from '../store/categories/selectors'

export default function CategoryContainer() {
  const {category} = useSelector((state) => getCategory(state))
  const location = useLocation()
  const getValueSearch = new URLSearchParams(location.search).get('search')
  const filterCategoryTitle = getValueSearch
    ? category.filter((item) =>
        item.title.toLowerCase().includes(getValueSearch.toLowerCase())
      )
    : category
  const match = useRouteMatch('/homework/:id')
  const todoId = +match?.params.id
  const dispatch = useDispatch()
  const [change, setChange] = useState('')
  const [alert, setAlert] = useState({show: false, message: '', type: ''})

  const handlerChangeInput = (e) => {
    setAlert({show: false, message: '', type: ''})
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
      setAlert({
        show: true,
        message: "This field can't be empty",
        type: 'danger'
      })
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
      category={filterCategoryTitle}
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
