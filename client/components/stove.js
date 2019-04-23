import React, {Component} from 'react'

class Stove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false
    }
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

  triggerSmoke = () => {
    setTimeout(() => {
      this.fireRef.current.style.display = 'block'
      this.triggerSmoke()
    }, 2000)
  }

  startFire = () => {
    setTimeout(() => {
      this.fireRef.current.style.display = 'block'
      this.triggerSmoke()
    }, 4000)
  }

  render() {
    const {turnOn, turnOff, startFire, fireRef, smokeRef} = this
    const {on} = this.state
    const stoveState = on ? 'TURN OFF' : 'TURN ON'
    const handleClick = on ? turnOff : turnOn
    if(on) startFire()
    return (
      <div>
        <div id='stove'>
          <h3>Stove</h3>
          <div id='smoke' ref={smokeRef}>Smoke</div>
          <div id='fire' ref={fireRef}>Fire</div>
          <button onClick={handleClick}>
            {stoveState}
          </button>
        </div>
      </div>
    )
  }
}

export default Stove