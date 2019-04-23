import React, {Component} from 'react'
import SmokeDetector from './smoke-detector'

class Stove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      stoveSwitch: true,
      stoveAlert: false,
      fire: false,
      smoke: false,
      smokeAlert: false,
      alarm: false
    }
  }

  turnOn = () => {
    this.setState({
      on: true,
      stoveAlert: true
    })
  }

  turnOff = () => {
    this.setState({
      on: false,
      alarm: false
    })
  }

  triggerAlarm = () => {
    if(this.state.on) {
      this.setState({
        alarm: true
      })      
    }
  }

  triggerSmoke = () => {
    setTimeout(() => {
      this.setState({
        smoke: true,
        smokeAlert: true
      })
      this.triggerAlarm()
    }, 3000)
  }

  startFire = () => {
    setTimeout(() => {
      this.setState({
        stoveSwitch: false,
        stoveAlert: false
      })
      if(this.state.on) {
        this.setState({
          fire: true
        })
        this.triggerSmoke()
      } else {
        this.setState({
          stoveSwitch: true
        })
      }
    }, 3000)
  }

  render() {
    const {turnOn, turnOff, startFire} = this
    const {on, stoveSwitch, stoveAlert, fire, smoke, smokeAlert, alarm} = this.state
    const stoveState = on ? 'TURN OFF' : 'TURN ON'
    const handleClick = on ? turnOff : turnOn
    if(on) startFire()
    return (
      <div>
        <div id='stove'>
          <h3>Stove</h3>
            {!stoveAlert ? null
            : <div id='stove-alert'>
                Stove on. Turn off in 3 seconds to prevent a fire!
              </div>
            }
            {!smokeAlert ? null
            : <div id='smoke-alert'>
                Smoke detector alarming! Turn off in 3 seconds to prevent a sprinkler system from activating.
              </div>
            }
          {smoke ? <div id='smoke'>Smoke</div> : <div></div>}
          {fire ? <div id='fire'>Fire</div>   : <div></div>}
          {!stoveSwitch ? <div></div>
          : <button onClick={handleClick}>
              {stoveState}
            </button>
          }
        </div>
        <SmokeDetector smoke={alarm} smokeAlert={smokeAlert} />
      </div>
    )
  }
}

export default Stove