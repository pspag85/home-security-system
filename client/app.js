import React from 'react'
import './css/app.css'
import SecurityPasscode from './components/security-passcode'
import House from './components/house'

const App = () => {
  return (
    <div id='app-container'>
      <h2 className='top-header'>OP Systems -- Home Security Program</h2>
      <SecurityPasscode />
      <House />
    </div>
  )
}

export default App