import React from 'react'
import Door from './door'

const House = () => {
  return (
    <div id='house'>
      <h2>HOUSE</h2>
      <div className='door-wrapper'>
        <Door type='Front Door'/>
        <Door type='Left Garage Door'/>
        <Door type='Right Garage Door'/>
        <Door type='Back Door'/>
      </div>
    </div>
  )
}

export default House