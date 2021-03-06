import React from 'react'

function Spinner() {
  return (
    <div className="spinner-box d-flex justify-content-center align-items-center">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
