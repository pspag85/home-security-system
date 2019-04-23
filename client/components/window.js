import React, {Component} from 'react'
import Lock from './lock'

class Window extends Component {
  state = {
    unlocked: false,
    open: false
  }

  unlockWindow = () => {
    const {passcode} = this.props
    const input = prompt('Please enter the passcode')
    if(input === passcode) {
      this.setState({
        unlocked: true
      })
    }
  }

  lockWindow = () => {
    this.setState({
      unlocked: false
    })
  }

  openWindow = () => {
    this.setState({
      open: true
    }) 
  }

  closeWindow = () => {
    this.setState({
      open: false
    })   
  }

  render() {
    const {lockWindow, unlockWindow, openWindow, closeWindow} = this
    const {unlocked, open} = this.state
    const {type} = this.props
    const lockState = unlocked ? 'Lock' : 'Unlock'
    const openState = open ? 'OPEN' : 'CLOSED'

    return open ? (
      <div className='unlocked window'>
        <h4>{type}</h4>
        <h4>{openState}</h4>
        <button onClick={closeWindow}>
          Close
        </button>
      </div>      
    ): unlocked ? (
        <div className='unlocked window'>
          <h4>{type}</h4>
          <h4>{openState}</h4>
          <button onClick={openWindow}>
            Open
          </button>
          <Lock action={lockState} handleClick={lockWindow} />
        </div>
      ):(
        <div className='locked window'>
          <h4>Window</h4>
          <h4>{openState}</h4>
          <Lock action={lockState} handleClick={unlockWindow} />
        </div>
      )
    
  }
}

export default Window