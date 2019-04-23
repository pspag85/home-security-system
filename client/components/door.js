import React, {Component} from 'react'
import Doorknob from './doorknob'

class Door extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    const {open} = this.state
    this.setState({
      open: !open
    })
  }

  render() {
    const {handleClick} = this
    const openState = this.state.open ? 'OPEN' : 'CLOSED'
    const {type} = this.props
    return (
      <div className='door'>
        <h4>{type}</h4>
        <h4>{openState}</h4>
        <Doorknob handleClick={handleClick} />
      </div>
    )  
  }
}

export default Door