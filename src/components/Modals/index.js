import React from 'react'
import {useSelector} from 'react-redux'
import ModalDelete from './ModalDelete'
import ModalEditTaskContainer from '../../container/ModalEditTaskContainer'

const modalCollections = {
  modalDelete: ModalDelete,
  modalEditTask: ModalEditTaskContainer
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
