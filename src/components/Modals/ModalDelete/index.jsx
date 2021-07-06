import React from 'react'
import './style.scss'
import Button from '../../Button'
import {Trash, XCircle} from 'react-bootstrap-icons'
import {useDispatch} from 'react-redux'
import {actionDeleteTodo} from '../../../store/todos'
import {actionHideModal} from '../../../store/modals'

export default function ModalDelete({id, title}) {
  const dispatch = useDispatch()
  const handlerDeleteToDo = () => {
    dispatch(actionDeleteTodo(id))
    handlerHideModal()
  }
  const handlerHideModal = () => {
    dispatch(actionHideModal())
  }

  return (
    <>
      <div className="modal-back">
        <div className="card">
          <div className="card-header text-white bg-info">Delete item?</div>
          <div className="card-body">
            <p className="card-text">Do you want to delete item "{title}" ?</p>
            <div className="d-flex w-100 justify-content-around">
              <Button
                icon={<Trash size="20" />}
                title="Delete"
                variant="danger"
                onClick={handlerDeleteToDo}
              />
              <Button
                icon={<XCircle size="20" />}
                title="Close"
                variant="dark"
                onClick={handlerHideModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
