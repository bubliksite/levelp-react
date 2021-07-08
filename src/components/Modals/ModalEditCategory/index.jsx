import React from 'react'
import './style.scss'
import {Check2Circle, XCircle} from 'react-bootstrap-icons'
import Button from '../../Button'
import Input from '../../Input'
import TodoList from '../../TodoList'

export default function ModalEditCategory({
  name,
  categoryId,
  todoId,
  todos,
  handlerHideModal,
  handlerTransferCategory,
  categoryTitle
}) {
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
          <div className="card-header text-white bg-info">
            Editing category {categoryTitle}
          </div>
          <div className="card-body">
            <div className="card-text py-3">
              <div className="row">
                <div className="col-md-6">
                  <p>Change task</p>
                  <TodoList
                    todos={todos}
                    categoryId={categoryId}
                    todoId={todoId}
                    name={name}
                    handlerTransferCategory={handlerTransferCategory}
                  />
                </div>
              </div>
              <form onSubmit={null}></form>
            </div>
            <div className="d-flex w-100 justify-content-end">
              {/*<Button*/}
              {/*  icon={<Check2Circle size="20" />}*/}
              {/*  title="Save"*/}
              {/*  variant="success"*/}
              {/*  classes="mr-3"*/}
              {/*  onClick={null}*/}
              {/*/>*/}
              {/*<Button*/}
              {/*  icon={<XCircle size="20" />}*/}
              {/*  title="Close"*/}
              {/*  variant="dark"*/}
              {/*  onClick={handlerHideModal}*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
