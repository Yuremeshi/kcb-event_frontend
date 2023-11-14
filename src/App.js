import React from 'react';
import { Layout } from './components/layout/Layout';
import { Events } from './components/events/Events';

export function App() {
    return (
        <Layout>
            <Events />
        </Layout>
    );
}