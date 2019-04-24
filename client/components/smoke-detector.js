import React, {Component} from 'react'
import SprinklerSystem from './sprinkler-system'
  const turnOff = (func) => {
    // this.props.smokeAlertRef.current.style.display = 'none'

    func()
    // let sprinklersRunning = false
    // let flooding = false
  }
const SmokeDetector = props => {
  const {smoke} = props
  console.log('smokew:  ', smoke)
  return smoke ? (
    <div>
      <SprinklerSystem 
        smoke={smoke}
      />
      <div className='smoke-detector'>
        <h3>Smoke Detector</h3>
        <button onClick={() => turnOff(props.ventSmoke)}>
          OFF
        </button>
      </div>
    </div>
  ):(
    <div>
      <div className='smoke-detector'>
        <h3>Smoke Detector</h3>
      </div>
    </div>
  )
}

export default SmokeDetector