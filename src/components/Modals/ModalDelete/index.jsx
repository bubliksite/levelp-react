import React from 'react'
import {useDispatch} from 'react-redux'

import './style.scss'
import {Trash, XCircle} from 'react-bootstrap-icons'

import Button from '../../Button'
import CategoryList from '../../CategoryList'

import {actionDeleteTodo} from '../../../store/todos'
import {actionHideModal} from '../../../store/modals'

import PropTypes from 'prop-types'

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
          <div
            className="close-icon text-white"
            role="button"
            onClick={handlerHideModal}
          >
            <XCircle size="30" />
          </div>
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

CategoryList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string
}
