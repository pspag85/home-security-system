import React, {Component} from 'react'
const {randomPasscodeGenerator} = require('../utils')

console.log(randomPasscodeGenerator())

class SecurityPasscode extends Component {
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
    console.log(handleClick, passcode)
    return (
      <div id='security-passcode-container'>
        <h3>Security Passcode</h3>
        <button onClick={handleClick}>
          Generate Homeowner Passcode
        </button>
        <h3>{passcode}</h3>
      </div>
    )  
  }
}

export default SecurityPasscode