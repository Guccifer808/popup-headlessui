import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import './App.css'


 export default function App() {
    let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
      <button className='btn-close' onClick={() => setIsOpen(true)}>Open</button>
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
    </>
  )
}

