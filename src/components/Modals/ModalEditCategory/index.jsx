import React from 'react'
import './style.scss'
import {Check2Circle, CheckSquare, Square, XCircle} from 'react-bootstrap-icons'
import Button from '../../Button'
import Input from '../../Input'
import TodoList from '../../TodoList'

export default function ModalEditCategory({
  name,
  todoId,
  id,
  todos,
  check,
  descript,
  title,
  value,
  updateCategory,
  handlerHideModal,
  handlerTransferCategory,
  handlerChangeTitle,
  handlerChangeChecked,
  handlerChangeDescription
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
            Editing category <b>{title}</b>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="row">
                <div className="col-md-5">
                  <p>Change task</p>
                  <TodoList
                    todos={todos}
                    categoryId={id}
                    todoId={todoId}
                    title={title}
                    name={name}
                    handlerTransferCategory={handlerTransferCategory}
                  />
                </div>
                <div className="col-md-7">
                  <p>Edit category</p>
                  <form>
                    <Input
                      classes="w-100 form-control"
                      placeholder="Edit title"
                      value={value}
                      onChange={(e) => handlerChangeTitle(e)}
                    />
                    <textarea
                      value={descript}
                      onChange={(e) => handlerChangeDescription(e)}
                      className="form-control mt-3"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <p>Check the category</p>
                      <Button
                        icon={
                          check ? (
                            <CheckSquare size="20" />
                          ) : (
                            <Square size="20" />
                          )
                        }
                        variant="link"
                        classes="btn-sm mr-2 p-0"
                        onClick={() => handlerChangeChecked(check)}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex w-100 justify-content-end">
                <Button
                  icon={<Check2Circle size="20" />}
                  title="Save"
                  variant="success"
                  classes="mr-3"
                  onClick={updateCategory}
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
      </div>
    </>
  )
}
