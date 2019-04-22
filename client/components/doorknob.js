import React from 'react'

const Doorknob = props => {
  return (
    <div id='Doorknob'>
      <button onClick={props.handleClick}>
        Doorknob
      </button>
    </div>
  )
}

export default Doorknob