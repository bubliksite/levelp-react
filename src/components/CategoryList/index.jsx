import React from 'react'
import './style.scss'
import Input from '../Input'
import Button from '../Button'
import Alert from '../Alert'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Trash, CheckSquare, Square} from 'react-bootstrap-icons'
import PropTypes from 'prop-types'

const CategoryList = ({
  categories,
  todoId,
  alert,
  change,
  handlerChangeInput,
  handlerAddCategory,
  handlerEditCategoryChecked,
  handlerDeleteCategory
}) => {
  return (
    <>
      <form className="d-flex mb-4" onSubmit={(e) => handlerAddCategory(e)}>
        <div className="form-group flex-grow-1">
          <Input
            classes="form-control w-100"
            placeholder="Add category"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
        </div>
        <div className="form-group ml-3">
          <Button
            classes="w-100"
            variant="warning"
            title="Add"
            onClick={(e) => handlerAddCategory(e)}
          />
        </div>
      </form>
      {alert ? <Alert type="danger" text="This field can't be empty" /> : ''}
      <ListGroup>
        {categories.category.map((item) => {
          return item.todoId === todoId ? (
            <ListGroupItem
              className="list-group-item-action d-flex justify-content-between align-items-center"
              variant="warning"
              key={item.id}
            >
              <div>{item.title}</div>
              <div>
                <Button
                  icon={
                    item.checked ? (
                      <CheckSquare size="20" />
                    ) : (
                      <Square size="20" />
                    )
                  }
                  variant="link"
                  classes="btn-sm mr-2"
                  onClick={() =>
                    handlerEditCategoryChecked(item.id, item.checked)
                  }
                />
                <Button
                  icon={<Trash size="20" />}
                  variant="danger"
                  classes="btn-sm"
                  onClick={() => handlerDeleteCategory(item.id)}
                />
              </div>
            </ListGroupItem>
          ) : null
        })}
      </ListGroup>
    </>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.object,
  todoId: PropTypes.number,
  alert: PropTypes.bool,
  change: PropTypes.string,
  handlerChangeInput: PropTypes.func,
  handlerAddCategory: PropTypes.func,
  handlerEditCategoryChecked: PropTypes.func,
  handlerDeleteCategory: PropTypes.func
}

export default CategoryList
