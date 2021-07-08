import React from 'react'
import {useSelector} from 'react-redux'
import ModalDelete from './ModalDelete'
import ModalEditTaskContainer from '../../container/ModalEditTaskContainer'
import ModalEditCategoryContainer from '../../container/ModalEditCategoryContainer'

const modalCollections = {
  modalDelete: ModalDelete,
  modalEditTask: ModalEditTaskContainer,
  modalEditCategory: ModalEditCategoryContainer
}

export default function Modals() {
  const modal = useSelector((state) => state.modal)
  if (!modal.length) {
    return null
  } else {
    return (
      <>
        {modal.map((item) => {
          const CurrentModal = modalCollections[item.name]
          return <CurrentModal {...item} key={item.name} />
        })}
      </>
    )
  }
}
