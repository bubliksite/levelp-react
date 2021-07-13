import React, {useState} from 'react'
import CategoryList from '../components/CategoryList'
import {useSelector, useDispatch} from 'react-redux'
import {useRouteMatch, useLocation} from 'react-router-dom'
import {
  actionCreateCategory,
  actionDeleteCategory,
  actionEditCheckCategory
} from '../store/categories'
import {getCategory} from '../store/categories/selectors'
import {actionShowModal} from '../store/modals'

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
        description: '',
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
    dispatch(actionEditCheckCategory(data))
  }

  const handlerDeleteCategory = (id) => {
    dispatch(actionDeleteCategory(id))
  }

  const saveCategoriesToLocalStorage = () => {
    window.localStorage.setItem('categories', JSON.stringify(category))
  }

  const showModalEditCategory = (
    categoryId,
    categoryTitle,
    todoId,
    checked
  ) => {
    dispatch(
      actionShowModal({
        name: 'modalEditCategory',
        categoryId,
        categoryTitle,
        todoId,
        checked
      })
    )
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
      saveCategoriesToLocalStorage={saveCategoriesToLocalStorage}
      showModalEditCategory={showModalEditCategory}
    />
  )
}
