import React from 'react'
import './style.scss'
import Input from '../Input'
import Button from '../Button'
import Alert from '../Alert'
import Spinner from '../Spinner'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Trash} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'

const CategoryList = ({
  categories,
  alert,
  change,
  showSpinner,
  handlerChangeInput,
  handlerAddCategory,
  handlerDeleteCategory
}) => {
  return (
    <>
      <form
        className="form-inline mb-4"
        onSubmit={(e) => handlerAddCategory(e)}
      >
        <div className="form-group col-sm-10 p-0">
          <Input
            classes="form-control w-100"
            placeholder="Add category"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
        </div>
        <div className="form-group col-sm-2 p-0 pl-sm-3">
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
        {categories.category.length ? (
          categories.category.map((item) => (
            <ListGroupItem
              className="list-group-item-action d-flex justify-content-between align-items-center"
              variant="warning"
              key={item.id}
            >
              <Link to={`/categories/${item.id}`}>{item.title}</Link>
              <Button
                title={<Trash size="20" />}
                variant="danger"
                classes="btn-sm"
                onClick={() => handlerDeleteCategory(item.id)}
              />
            </ListGroupItem>
          ))
        ) : showSpinner ? (
          <Spinner />
        ) : (
          <Alert type="light" text="This list is empty" />
        )}
      </ListGroup>
    </>
  )
}

export default CategoryList
