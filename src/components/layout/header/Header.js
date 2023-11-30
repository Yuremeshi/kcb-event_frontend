import React from 'react';
import { Menu } from '@headlessui/react';
import { DropdownHeader } from './DropdownHeader';
import { LoginDialog } from '../../modal/Login';
import { SignupDialog } from '../../modal/Signup';

// Placeholder for user logged in logic
const isLoggedIn = false;

export const Header = () => {
    return (
        <header className="bg-transparent flex justify-center z-10 top-0 absolute w-[calc(100%-16px)]">
            <div className="flex flex-grow h-full items-center max-w-[1100px] bg-paper-pattern mt-4 rounded-md">
                <div className="flex flex-grow justify-between items-center h-[60px]">
                    <a href="/" className="flex ml-4 items-center gap-2 p-1 border-[1px] border-gray-200 hover:border-sky-400 rounded-sm">
                        <img id="img" draggable="false" alt="" className="w-10 rounded-2xl" src="https://yt3.ggpht.com/ytc/APkrFKad9it9FBmbcNj2MIRXjrRNgsQIN2p-aIUQse84=s68-c-k-c0x00ffffff-no-rj" />
                        <h1 className="font-himelody text-3xl font-semibold">교육이부 Events</h1> 
                    </a>
                    <div>
                        {isLoggedIn ?
                            <div className="flex mr-2">                        
                                <DropdownHeader />
                            </div>
                            :
                            <div className="flex gap-2 mr-4">
                                <div>
                                    <LoginDialog />
                                </div>
                                <div>
                                    <SignupDialog />
                                </div>
                            </div>                                          
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}