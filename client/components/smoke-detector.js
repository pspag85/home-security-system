import React, {Component} from 'react'
import SprinklerSystem from './sprinkler-system'

const SmokeDetector = (props) => (
  <div>
    <div className='smoke-detector'>
      <h3>Smoke Detector</h3>
      <SprinklerSystem alarm={props.alarm} />
      {!props.alarm ? null : <div id='fire-alarm'></div>}
    </div>
  </div>
)

export default SmokeDetector