import React from 'react';
import { Menu } from '@headlessui/react';
import { DropdownHeader } from './DropdownHeader';
import { LoginDialog } from '../../modal/Login';
import { SignupDialog } from '../../modal/Signup';

export const Header = () => {
    return (
        <header className="bg-transparent flex justify-center border-b-2 border-lime-500 z-10 top-0 absolute w-[calc(100%-16px)]">
            <div className="flex flex-grow h-full items-center max-w-[1000px] bg-red-400 mt-4 rounded-md">
                <div className="flex flex-grow justify-between items-center h-[60px]">
                    <h1 className="ml-4">KCB Events Yay</h1> 
                    <DropdownHeader />
                    <div className="flex gap-2 mr-4">
                        <div>
                            <LoginDialog />
                        </div>
                        <div>
                            <SignupDialog />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}