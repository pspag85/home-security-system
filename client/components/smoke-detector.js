import React, {Component} from 'react'

class SmokeDetector extends Component {
  state = {
    smoke: false
  }

  turnOff = () => {
    this.setState({
      smoke: false
    })
  }

  render() {
    const {turnOff, triggerSprinklers} = this
    const {smoke} = this.state
    return smoke ? (
      <div>
        <div id='smoke-detector'>
          <h3>Smoke Detector</h3>
          <button onClick={handleClick}>
            OFF
          </button>
        </div>
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