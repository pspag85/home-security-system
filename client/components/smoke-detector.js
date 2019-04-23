import React, {Component} from 'react'

class SmokeDetector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sprinklersRunning: false,
      sprinklerAlert: false,
      flood: false,
      flooding: false,
      floodMessage: false
    }
  }

  turnOff = () => {
    // this.props.smokeAlertRef.current.style.display = 'none'
    this.setState({
      sprinklersRunning: false,
      flooding: false
    })
  }

  drainWater = () => {
    setTimeout(() => {
      this.setState({
        flood: false,
        flooding: false
      })
    }, 3000)
  }

  triggerFlood = () => {
    setTimeout(() => {
      this.setState({
        flood: true,
        floodAlert: true
      })
      this.drainWater()
    }, 3000)
    this.setState({
      flooding: true
    })
  }

  triggerSprinklers = () => {
    setTimeout(() => {
      // this.props.smokeAlertRef.current.style.display = 'none'
      this.setState({
        sprinklerAlert: true
      })
      this.triggerFlood()
    }, 3000)
  }

  turnOffSprinklers = () => {
    this.setState({
      sprinklerAlert: false,
      sprinklersRunning: false,
      flooding: false
    })
  }

  render() {
    const {turnOff, triggerSprinklers, turnOffSprinklers} = this
    const {sprinklerAlert, flood, floodAlert} = this.state
    const sprinklerAlertMessage = sprinklerAlert ? 'Fire sprinklers running. Turn off in 3 seconds to prevent flooding!' : ''
    const floodAlertMessage = floodAlert ? 'Flood system activated. Wait 3 seconds for water to drain.' : ''    
    const {smoke} = this.props
    if(smoke) triggerSprinklers()
    return smoke ? (
      <div>
        <div id='sprinkler-alert'>
          {sprinklerAlertMessage}
          <button onClick={turnOffSprinklers}>Turn Off</button>
        </div>
        <div id='flood-alert'>
          {floodAlertMessage}
        </div>
        <div id='smoke-detector'>
          <h3>Smoke Detector</h3>
          <button onClick={turnOff}>
            OFF
          </button>
        </div>
        {flood ? <div id='flood'></div> : <div></div>}
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