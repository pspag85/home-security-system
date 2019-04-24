import React, {Component} from 'react'
import SprinklerSystem from './sprinkler-system'
const turnOff = (cb) => {
  // this.props.smokeAlertRef.current.style.display = 'none'
  cb()
}

const SmokeDetector = props => {
  console.log(props)
  const {smoke} = props
  return smoke ? (
    <div>
      <SprinklerSystem 
        smoke={true}
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