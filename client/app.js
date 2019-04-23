import React from 'react'
import './css/app.css'
import SecuritySystem from './components/security-system'

const App = () => {
  return (
    <div id='app-container'>
      <h2 className='top-header'>OP Systems -- Home Security Program</h2>
      <SecuritySystem />
    </div>
  )
}

export default App