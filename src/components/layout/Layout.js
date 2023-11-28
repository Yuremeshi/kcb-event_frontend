import React from 'react';
import { Header } from './header/Header';

export const Layout = ({ children }) => (
    <div id="content-holder" className="flex flex-col h-screen">
        <main className="flex flex-grow overflow-y-auto justify-center absolute w-full h-full">
            {children}
        </main>
    </div>
)