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
    this.fireRef = React.createRef()
    this.smokeRef = React.createRef()
  }


  turnOn = () => {
    this.setState({
      on: true
    })
  }

  turnOff = () => {
    this.setState({
      on: false
    })
  }

  triggerAlarm = () => {
    this.setState({
      smoke: true
    })
  }

  triggerSmoke = () => {
    setTimeout(() => {
      this.smokeRef.current.style.display = 'block'
      this.triggerAlarm()
    }, 2000)
  }

  startFire = () => {
    setTimeout(() => {
      this.stoveRef.current.style.display = 'none'
      this.fireRef.current.style.display = 'block'
      this.triggerSmoke()
    }, 4000)
  }

  render() {
    const {turnOn, turnOff, startFire, stoveRef, fireRef, smokeRef} = this
    const {on, smoke} = this.state
    const stoveState = on ? 'TURN OFF' : 'TURN ON'
    const handleClick = on ? turnOff : turnOn
    if(on) startFire()
    return (
      <div>
        <div id='stove'>
          <h3>Stove</h3>
          <div id='smoke' ref={smokeRef}>Smoke</div>
          <div id='fire' ref={fireRef}>Fire</div>
          <button ref={stoveRef} onClick={handleClick}>
            {stoveState}
          </button>
        </div>
        <SmokeDetector smoke={smoke} />
      </div>
    )
  }
}

export default Stove