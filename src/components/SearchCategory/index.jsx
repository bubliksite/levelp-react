import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import Input from '../Input'

export default function SearchCategory() {
  const [value, setValue] = useState('')
  const history = useHistory()
  const url = new URL(window.location.href)
  const handlerSetUrlValue = (e) => {
    const setUrlValue = url.searchParams.set('search', `${e.target.value}`)
    history.replace(url.search.replace(setUrlValue))
    setValue(e.target.value)
  }
  return (
    <div className="mt-4 mb-4 d-flex justify-content-center align-items-center">
      <p className="mb-0 mr-3">Поиск: </p>
      <Input
        value={value}
        onChange={handlerSetUrlValue}
        classes="form-control w-100"
        placeholder="Search category"
      />
    </div>
  )
}
