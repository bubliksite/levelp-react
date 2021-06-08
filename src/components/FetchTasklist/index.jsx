import React, {useState} from 'react'
import './style.scss'
import Button from '../Button'
import Article from '../Article'

function FetchTasklist() {
  const [isShow, setIsShow] = useState(false)
  function toggleText() {
    setIsShow(!isShow)
  }
  return (
    <div>
      <Button isShow={isShow} onClick={toggleText} />
      <Article isShow={isShow} />
    </div>
  )
}

export default FetchTasklist
