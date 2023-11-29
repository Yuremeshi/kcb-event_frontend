import React from 'react';
import { Menu } from '@headlessui/react';
import { LoginDialog } from '../../modal/Login';

export const DropdownHeader = () => {
    return (
        <div className="flex gap-5 mr-2">
            {/* Dropdown menu */}
            <Menu as="div" id="Dropdown-Container" className="flex relative">
                <Menu.Button>
                    <svg className="h-[30px] w-[30px]" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                </Menu.Button>
                <Menu.Items id="Dropdown-List-Container" className="absolute block z-100 top-full right-0 w-52 bg-slate-50 rounded-md">            
                    <div className="flex items-center h-10 mx-2">
                        Username Placeholder
                    </div>
                    <div className="block border-[1px] border-t-slate-300 w-11/12 mt-1 mb-2 mx-2"></div>
                    <Menu.Item>
                        {({ active }) => (
                            <a href="index.html" className={`flex items-center px-2
                            ${active ? "bg-cyan-600 text-white" : "text-gray-700"}
                            `}>
                                Account
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a href="index.html" className={`flex items-center px-2 mt-2
                            ${active ? "bg-cyan-600 text-white" : "text-gray-700"}
                            `}>
                                Your Events
                            </a>
                        )}
                    </Menu.Item>
                    <div className="block border-[1px] border-t-slate-300 w-11/12 mt-3 mx-2"></div>
                    <Menu.Item>
                        {({ active }) => (
                            <a href="index.html" className={`flex items-center px-2 my-2
                            ${active ? "bg-cyan-600 text-white" : "text-gray-700"}
                            `}>
                                Logout
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>        
    )
}