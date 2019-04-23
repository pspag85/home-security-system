import React from 'react'

const Lock = props => {
  const {handleClick, action} = props
  return (
    <div id='Lock'>
      <button onClick={handleClick}>
        {action}
      </button>
    </div>
  )
}

export default Lock