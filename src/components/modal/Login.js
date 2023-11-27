import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function LoginDialog() {
    let [isOpen, setIsOpen] = useState(false)

    function closeLoginModal() {
        setIsOpen(false)
    }

    function openLoginModal() {
        setIsOpen(true)
    }

    function handleLogin() {

    }

    return (
        <>
            <div>
                <button type="button" onClick={openLoginModal}>
                    Login
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                    <Dialog.Panel>
                        <Dialog.Title>Login</Dialog.Title>
                        <Dialog.Description>
                            Login to your account
                        </Dialog.Description>

                        <p>Placeholder</p>
                        <p>Placeholder 2</p>

                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={handleLogin}>Login</button>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
        </>   
    )
}