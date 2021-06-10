import React, {useState} from 'react'
import Button from '../Button'
import Article from '../Article'

function FetchTasklist() {
  const [isShow, setIsShow] = useState(false)
  function toggleText() {
    setIsShow(!isShow)
  }
  return (
    <div>
      <Button
        title={isShow ? 'Hide' : 'Show'}
        classes="px-4 mb-4"
        variant="warning"
        onClick={toggleText}
      />
      <Article isShow={isShow} />
    </div>
  )
}

export default FetchTasklist
