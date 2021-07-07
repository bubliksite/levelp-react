import React from 'react'
import {Check2Circle, XCircle} from 'react-bootstrap-icons'
import Button from '../../Button'
import Input from '../../Input'

export default function ModalEditTask({
  title,
  value,
  handlerHideModal,
  handlerChangeInput
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
            Editing "{title}"
          </div>
          <div className="card-body">
            <p className="card-text py-3">
              <label className="float-left">Input new title of task</label>
              <Input
                classes="w-100 form-control"
                value={value}
                onChange={(e) => handlerChangeInput(e)}
              />
            </p>
            <div className="d-flex w-100 justify-content-end">
              <Button
                icon={<Check2Circle size="20" />}
                title="Save"
                variant="success"
                classes="mr-3"
                //onClick={handlerEditTask}
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
