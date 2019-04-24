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
    this.systemRef = React.createRef()
  }

  drainWater = () => {
    this.drainInterval = setInterval(() => {
      this.systemRef.current.style.display = 'none'
      document.getElementById("smoke-alert").style.display = 'none'
      document.getElementById("fire-alarm").style.display = 'none'
    }, 3000)
  }

  triggerFlood = () => {
    this.floodInterval = setInterval(() => {
      this.setState({
        flood: true,
        floodAlert: true
      }, () => this.drainWater())
    }, 3000)
    this.setState({
      flooding: true
    })
  }

  triggerSprinklers = () => {
    this.sprinklerInterval = setInterval(() => {
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

  componentDidUpdate(prevProps) {
    if(this.props.alarm) this.triggerSprinklers()
  }

  componentWillUnmount() {
    const {drainInterval, floodInterval, sprinklerInterval} = this
    clearInterval(drainInterval)
    clearInterval(floodInterval)
    clearInterval(sprinklerInterval)
  }

  render() {
    const {systemRef} = this
    const {sprinklerAlert, flood, floodAlert} = this.state
    return (
      <div ref={systemRef}>
        {!sprinklerAlert ? null
        : <div id='sprinkler-alert'>
            Fire sprinklers activated. Initiating flood system...
          </div>
        }
        {!floodAlert ? null
        : <div id='flood-alert'>
            Flood system activated. Wait 3 seconds for water to drain.
          </div>
        }
        {flood ? <div id='flood'></div> : null}
      </div>
    )
  }
}

export default SprinklerSystem