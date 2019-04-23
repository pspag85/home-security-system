import React, {Component} from 'react'
import SmokeDetector from './smoke-detector'

class Stove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      smoke: false
    }
    this.stoveRef = React.createRef()
    this.stoveAlertRef = React.createRef()
    this.fireRef = React.createRef()
    this.smokeRef = React.createRef()
    this.smokeAlertRef = React.createRef()
  }

  turnOn = () => {
    this.stoveAlertRef.current.style.display = 'block'
    this.setState({
      on: true
    })
  }

  turnOff = () => {
    this.setState({
      on: false,
      smoke: false
    })
  }

  triggerAlarm = () => {
    if(this.state.on) {
      this.setState({
        smoke: true
      })      
    }
  }

  triggerSmoke = () => {
    setTimeout(() => {
      this.smokeRef.current.style.display = 'block'
      this.triggerAlarm()
      this.smokeAlertRef.current.style.display = 'block'
    }, 3000)
  }

  startFire = () => {
    setTimeout(() => {
      this.stoveAlertRef.current.style.display = 'none'
      this.stoveRef.current.style.display = 'none'
      if(this.state.on) {
        this.fireRef.current.style.display = 'block'
        this.triggerSmoke()
      } else {
        this.stoveRef.current.style.display = 'block'
      }
    }, 3000)
  }

  render() {
    const {turnOn, turnOff, startFire, stoveRef, stoveAlertRef, fireRef, smokeRef, smokeAlertRef} = this
    const {on, smoke} = this.state
    const stoveState = on ? 'TURN OFF' : 'TURN ON'
    const handleClick = on ? turnOff : turnOn
    if(on) startFire()
    return (
      <div>
        <div id='stove'>
          <h3>Stove</h3>
        <div id='stove-alert'
          ref={stoveAlertRef}>
          Stove on. Turn off in 3 seconds to prevent a fire!
        </div>
          <div id='smoke-alert'
          ref={smokeAlertRef}>
          Smoke detector alarming! Turn off in 3 seconds to prevent a sprinkler system from activating.
        </div>
          <div id='smoke' ref={smokeRef}>Smoke</div>
          <div id='fire' ref={fireRef}>Fire</div>
          <button ref={stoveRef} onClick={handleClick}>
            {stoveState}
          </button>
        </div>
        <SmokeDetector smoke={smoke} smokeAlertRef={smokeAlertRef} />
      </div>
    )
  }
}

export default Stove