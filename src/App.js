import React from 'react';
import { Layout } from './components/layout/Layout';
import { Events } from './components/events/Events';
import { Header } from './components/layout/header/Header';

export function App() {
    return (
        <Layout>
            <Header />
            <Events />
        </Layout>
    );
}