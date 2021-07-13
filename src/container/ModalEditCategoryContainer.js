import React, {useState} from 'react'
import ModalEditCategory from '../components/Modals/ModalEditCategory'
import {actionHideModal} from '../store/modals'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getTodo} from '../store/todos/selectors'
import {actionEditCategory, actionTransferCategory} from '../store/categories'
import {getCategory} from '../store/categories/selectors'

export default function ModalEditCategoryContainer({name, categoryId}) {
  const todos = useSelector((state) => getTodo(state))
  const {category} = useSelector((state) => getCategory(state))
  const findCategory = category.find((item) => item.id === categoryId)
  const dispatch = useDispatch()
  const history = useHistory()
  const [value, setValue] = useState(findCategory.title)
  const [check, setCheck] = useState(findCategory.checked)
  const [descript, setDescript] = useState(findCategory.description)

  const updateCategory = () => {
    const data = {
      categoryId,
      title: value,
      checked: check,
      description: descript
    }
    dispatch(actionEditCategory(data))
    handlerHideModal()
  }

  const handlerTransferCategory = (taskId) => {
    const data = {
      taskId,
      categoryId
    }
    dispatch(actionTransferCategory(data))
    history.push(`/homework/${taskId}`)
  }
  const handlerHideModal = () => {
    dispatch(actionHideModal())
  }

  const handlerChangeTitle = (e) => {
    setValue(e.target.value)
  }

  const handlerChangeChecked = (checked) => {
    setCheck(!checked)
  }

  const handlerChangeDescription = (e) => {
    setDescript(e.target.value)
    console.log(descript)
  }

  return (
    <ModalEditCategory
      todos={todos}
      name={name}
      value={value}
      check={check}
      descript={descript}
      {...findCategory}
      updateCategory={updateCategory}
      handlerChangeTitle={handlerChangeTitle}
      handlerChangeChecked={handlerChangeChecked}
      handlerChangeDescription={handlerChangeDescription}
      handlerTransferCategory={handlerTransferCategory}
      handlerHideModal={handlerHideModal}
    />
  )
}
