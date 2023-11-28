import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

export function SignupDialog() {
    let [isOpen, setIsOpen] = useState(false)

    function closeSignupModal() {
        setIsOpen(false)
    }

    function openSignupModal() {
        setIsOpen(true)
    }

    function handleSignup() {

    }

    return (
<>
      <div>
        <button
          type="button"
          onClick={openSignupModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Signup
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeSignupModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-3xl font-medium leading-6 text-gray-900 mt-4">
                    Sign Up
                  </Dialog.Title>
                  <div className="flex flex-col items-center">
                    <section className="flex flex-col items-left mt-4 md:mt-8 w-11/12">
                        <label className="flex justify-start">Username or Email:</label>
                        <input 
                            className="h-5 md:h-8 rounded text-xs md:text-base p-1 md:p-2 border-2"
                            // value={SignupEmail} 
                            // onChange={(e) => setSignupEmail(e.target.value)} 
                            type="text" 
                            name="email" 
                            required
                        />
                    </section>

                    <section className="flex flex-col justify-right mt-1 md:mt-4 w-11/12">
                        <div className="flex justify-between items-end">
                            <label>Password:</label>
                        </div>
                        <input 
                            className="h-5 md:h-8 rounded text-xs md:text-base p-1 md:p-2 border-2"
                            // value={SignupPassword} 
                            // onChange={(e) => setSignupPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            required
                        />
                    </section>

                    <section className="flex flex-col justify-right mt-1 md:mt-4 w-11/12">
                        <div className="flex justify-between items-end">
                            <label>Confirm Password:</label>
                        </div>
                        <input 
                            className="h-5 md:h-8 rounded text-xs md:text-base p-1 md:p-2 border-2"
                            // value={SignupPassword} 
                            // onChange={(e) => setSignupPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            required
                        />
                    </section>
                  </div>
                  

                  <div className="flex mt-8 gap-3 justify-center mb-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSignup}
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeSignupModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </> 
    )
}