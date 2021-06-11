import React, {useEffect, useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import {
  actionCreateCategory,
  actionDeleteCategory
} from '../../store/categories'
import Input from '../Input'
import Button from '../Button'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Trash} from 'react-bootstrap-icons'
import Spinner from '../Spinner'
import Alert from '../Alert'

const CategoryList = () => {
  const categories = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const [change, setChange] = useState('')
  const [alert, setAlert] = useState(false)
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowSpinner(false), 5000)
  })

  const handlerChangeInput = (e) => {
    setAlert(false)
    setChange(e.target.value)
  }
  const handlerAddCategory = (e) => {
    e.preventDefault()
    if (change) {
      const data = {
        id: Date.now(),
        title: change
      }
      dispatch(actionCreateCategory(data))
      setChange('')
    } else {
      setAlert(true)
    }
  }

  const handlerDeleteCategory = (id) => {
    dispatch(actionDeleteCategory(id))
    if (categories.category.length === 1) {
      setShowSpinner(false)
    }
  }

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
