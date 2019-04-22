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
    let openState = this.state.open ? 'OPEN' : 'CLOSED'
    return (
      <div className='door'>
        <h3>{openState}</h3>
        <Doorknob handleClick={this.handleClick} />
      </div>
    )  
  }
}

export default Door