import React from 'react';
import { Menu } from '@headlessui/react';

export const DropdownHeader = () => {
    return (
        <div class="flex gap-5 mr-2">
            <Menu as="div" id="Dropdown-Container" class="flex relative">
                <Menu.Button>
                    <svg class="h-[36px] w-[36px]" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                </Menu.Button>
                <Menu.Items id="Dropdown-List-Container" class="absolute block z-100 top-full right-0">            
                    <div>
                        Dropdown Test
                    </div>
                    <div>
                        Dropdown Test 2
                    </div>
                </Menu.Items>
            </Menu>
            {/* Placeholder for guests */}
            {/* <div>Login</div>
            <div>Sign Up</div> */}
        </div>
            
    )
}