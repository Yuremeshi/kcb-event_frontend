import React from 'react';
import { Header } from './header/Header';

export const Layout = ({ children }) => (
    <div id="content-holder" class="flex flex-col h-screen">
        <main class="flex flex-grow overflow-y-auto justify-center absolute w-full h-full">
            {children}
        </main>
    </div>
)