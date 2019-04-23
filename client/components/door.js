import React, {Component} from 'react'
import Doorknob from './doorknob'

class Door extends Component {
  state = {
    unlocked: false,
    open: false
  }

  handleClick = () => {
    const {passcode} = this.props
    const {unlocked, open} = this.state
    if(unlocked) {
      this.setState({
        open: !open
      })      
    } else {
      const input = prompt('Door is locked. Please enter the passcode')
      console.log(input, passcode)
      if(input === passcode) {
        this.setState({
          unlocked: true
        })
        //display lock button and green bg
      }
    }
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