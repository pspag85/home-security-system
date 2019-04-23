import React, {Component} from 'react'
const {randomPasscodeGenerator} = require('../utils')
import House from './house'

class SecuritySystem extends Component {
  state = {
    passcode: randomPasscodeGenerator()
  }

  handleClick = () => {
    const passcode = randomPasscodeGenerator()
    this.setState({
      passcode
    })
  }

  render() {
    const {handleClick} = this
    let {passcode} = this.state
    return (
      <div id='system-system'>
        <div id='security-system-container'>
          <h3 className='top-header'>Security System</h3>
          <button onClick={handleClick}>
            Generate Homeowner Passcode
          </button>
          <h3>{passcode}</h3>
        </div>
        <House passcode={passcode} />
      </div>
    )  
  }
}

export default SecuritySystem