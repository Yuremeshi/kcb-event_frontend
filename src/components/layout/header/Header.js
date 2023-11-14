import React from 'react';

export const Header = () => {
    return (
        <header class="bg-transparent flex justify-center border-b-2 border-lime-500 z-10 top-0 fixed w-[calc(100%-16px)]">
            <div class="flex flex-grow h-full items-center max-w-4xl bg-red-400 mt-4 rounded-md">
                <div class="flex flex-grow justify-between items-center h-[60px]">
                    <h1 class="ml-2">KCB Events Yay</h1> 
                    <div class="flex gap-5 mr-2">
                        Dropdown Menu Placeholder
                    </div>
                </div>
            </div>
        </header>
    )
}