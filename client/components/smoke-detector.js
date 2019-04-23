import React, {Component} from 'react'
import SprinklerSystem from './sprinkler-system'

const SmokeDetector = props => {
  const turnOff = () => {
    // this.props.smokeAlertRef.current.style.display = 'none'
    console.log(props)
    props.ventSmoke()
    let sprinklersRunning = false
    let flooding = false
  }
  const {smoke} = props
  return smoke ? (
    <div>
      <SprinklerSystem 
        smoke={smoke}
      />
      <div className='smoke-detector'>
        <h3>Smoke Detector</h3>
        <button onClick={turnOff}>
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