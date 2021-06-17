import React, {useEffect, useState} from 'react'
import CategoryList from '../components/CategoryList'
import {useSelector, useDispatch} from 'react-redux'
import {actionCreateCategory, actionDeleteCategory} from '../store/categories'

export default function CategoryContainer() {
  const categories = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const [change, setChange] = useState('')
  const [alert, setAlert] = useState(false)
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowSpinner(false), 5000)
  })

  const handlerChangeInput = (e) => {
    setAlert(false)
    setChange(e.target.value)
  }
  const handlerAddCategory = (e) => {
    e.preventDefault()
    if (change) {
      const data = {
        id: Date.now(),
        title: change
      }
      dispatch(actionCreateCategory(data))
      setChange('')
    } else {
      setAlert(true)
    }
  }

  const handlerDeleteCategory = (id) => {
    dispatch(actionDeleteCategory(id))
    if (categories.category.length === 1) {
      setShowSpinner(false)
    }
  }

  return (
    <CategoryList
      categories={categories}
      alert={alert}
      change={change}
      showSpinner={showSpinner}
      handlerChangeInput={handlerChangeInput}
      handlerAddCategory={handlerAddCategory}
      handlerDeleteCategory={handlerDeleteCategory}
    />
  )
}
