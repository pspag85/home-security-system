import React from 'react'
import Door from './door'

const House = props => {
  const {passcode} = props
  return (
    <div id='house'>
      <h2>HOUSE</h2>
      <div className='door-wrapper'>
        <Door type='Front Door' passcode={passcode} />
        <Door type='Left Garage Door' passcode={passcode} />
        <Door type='Right Garage Door' passcode={passcode} />
        <Door type='Back Door' passcode={passcode} />
      </div>
    </div>
  )
}

export default House