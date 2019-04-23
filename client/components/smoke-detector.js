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
    this.setState({
      sprinklersRunning: false
    })
  }

  triggerFlood = () => {
    setTimeout(() => {
      this.floodRef.current.style.display = 'block'
      this.floodAlertRef.current.style.display = 'block'
    }, 3000)
    this.setState({
      flooding: true
    })
  }

  triggerSprinklers = () => {
    setTimeout(() => {
      this.sprinklerRef.current.style.display = 'block'
      this.triggerFlood()
    }, 3000)
  }

  render() {
    const {turnOff, triggerSprinklers, sprinklerRef, floodRef, floodAlertRef} = this
    const {smoke} = this.props
    if(smoke) triggerSprinklers()
    return smoke ? (
      <div>
        <div id='sprinkler-alert'
          ref={sprinklerRef}>
          Fire sprinklers running. Turn off in 3 seconds to prevent flooding!
        </div>
        <div id='flood-alert'
          ref={floodAlertRef}>
          Flood system activated. Please wait 3 seconds for water to drain
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