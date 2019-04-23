import React, {Component} from 'react'
import Doorknob from './doorknob'
import Lock from './lock'

class Door extends Component {
  state = {
    unlocked: false,
    open: false
  }

  unlockDoor = () => {
    const {passcode} = this.props
    const input = prompt('Please enter the passcode')
    if(input === passcode) {
      this.setState({
        unlocked: true
      })
    }
  }

  lockDoor = () => {
    this.setState({
      unlocked: false
    })
  }

  openDoor = () => {
    this.setState({
      open: true
    }) 
  }

  closeDoor = () => {
    this.setState({
      open: false
    })   
  }

  render() {
    const {lockDoor, unlockDoor, openDoor, closeDoor, handleClick} = this
    const {unlocked, open} = this.state
    const {type} = this.props
    const lockState = unlocked ? 'Lock' : 'Unlock'
    const openState = open ? 'OPEN' : 'CLOSED'

    return open ? (
      <div className='unlocked door'>
        <h4>{type}</h4>
        <h4>{openState}</h4>
        <Doorknob handleClick={closeDoor} />
      </div>      
    ): unlocked ? (
        <div className='unlocked door'>
          <h4>{type}</h4>
          <h4>{openState}</h4>
          <Doorknob handleClick={openDoor} />
          <Lock action={lockState} handleClick={lockDoor} />
        </div>
      ):(
        <div className='locked door'>
          <h4>{type}</h4>
          <h4>{openState}</h4>
          <Lock action={lockState} handleClick={unlockDoor} />
        </div>
      )
    
  }
}

export default Door