import React from 'react'
import openModal from './components/openModal'

function App() { 

  const showModal = () => {
    openModal()
  }
  return (
    <div className='App'>
      <button onClick={showModal}>Show Modal</button>
    </div>
  )
}

export default App