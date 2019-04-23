import React, {Component} from 'react'

class SprinklerSystem extends Component {
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

  drainWater = () => {
    this.drainInterval = setInterval(() => {
      this.setState({
        flood: false,
        flooding: false
      })
    }, 3000)
  }

  triggerFlood = () => {
    this.floodInterval = setInterval(() => {
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
    this.sprinklerInterval = setInterval(() => {
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

  componentWillUnmount() {
    const {drainInterval, floodInterval, sprinklerInterval} = this
    clearInterval(drainInterval)
    clearInterval(floodInterval)
    clearInterval(sprinklerInterval)
  }

  render() {
    const {triggerSprinklers, turnOffSprinklers} = this
    const {sprinklerAlert, flood, floodAlert} = this.state
    const {smoke} = this.props
    if(smoke) triggerSprinklers()
    return (
      <div>
        {!sprinklerAlert ? null
        : <div id='stove-alert'>
            Fire sprinklers running. Turn off in 3 seconds to prevent flooding!
          </div>
        }
        {!floodAlert ? null
        : <div id='smoke-alert'>
            Flood system activated. Wait 3 seconds for water to drain.
          </div>
        }
        {flood ? <div id='flood'></div> : <div></div>}
      </div>
    )
  }
}

export default SprinklerSystem