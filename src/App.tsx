import { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { SlClose } from 'react-icons/sl'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="App">
      
      <button className='btn-open' onClick={() => setIsOpen(true)}>Open</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='background'>
          <Dialog.Panel className="popup">
            <Dialog.Title>Payment successful</Dialog.Title>
            <div className="text">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</div>
            <button className='btn-close' onClick={() => setIsOpen(false)}>X</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default App
