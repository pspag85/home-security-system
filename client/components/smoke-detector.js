import React, {Component} from 'react'

class SmokeDetector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sprinklersRunning: false,
      flooding: false
    }
    this.sprinklerRef = React.createRef()
    this.floodRef = React.createRef()
    this.floodAlertRef = React.createRef()
  }

  turnOff = () => {
    this.props.smokeAlertRef.current.style.display = 'none'
    this.setState({
      sprinklersRunning: false
    })
  }

  drainWater = () => {
    setTimeout(() => {
      this.floodRef.current.style.display = 'none'
      this.floodAlertRef.current.style.display = 'none'
    }, 3000)
  }

  triggerFlood = () => {
    setTimeout(() => {
      console.log('flooding')
      // this.props.smokeAlertRef.current.style.display = 'none'
      this.floodRef.current.style.display = 'block'
      this.floodAlertRef.current.style.display = 'block'
      this.drainWater()
    }, 3000)
    this.setState({
      flooding: true
    })
  }

  triggerSprinklers = () => {
    setTimeout(() => {
      this.props.smokeAlertRef.current.style.display = 'none'
      this.sprinklerRef.current.style.display = 'block'
      this.triggerFlood()
    }, 3000)
  }

  turnOffSprinklers = () => {
    this.sprinklerRef.current.style.display = 'none'
    this.setState({
      sprinklersRunning: false,
      flooding: false
    })
  }

  render() {
    const {turnOff, triggerSprinklers, turnOffSprinklers, sprinklerRef, floodRef, floodAlertRef} = this
    const {smoke} = this.props
    if(smoke) triggerSprinklers()
    return smoke ? (
      <div>
        <div id='sprinkler-alert'
          ref={sprinklerRef}>
          Fire sprinklers running. Turn off in 3 seconds to prevent flooding!
          <button onClick={turnOffSprinklers}>Turn Off</button>
        </div>
        <div id='flood-alert'
          ref={floodAlertRef}>
          Flood system activated. Wait 3 seconds for water to drain.
        </div>
        <div id='smoke-detector'>
          <h3>Smoke Detector</h3>
          <button onClick={turnOff}>
            OFF
          </button>
        </div>
      <div id='flood' ref={floodRef}></div>
      </div>
    ):(
      <div>
        <div id='smoke-detector'>
          <h3>Smoke Detector</h3>
        </div>
      </div>
    )
  }
}

export default SmokeDetector