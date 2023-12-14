import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Events } from './components/events/Events';
import { Header } from './components/layout/header/Header';
import { Details } from './components/eventdetails/Details';

export function App() {
    return (
        <Layout>
            <Header />
            <Routes>
                <Route path='/' element={
                    <Events />
                }/>
                <Route path='/eventdetails/' element={
                    <Details />
                }/>
            </Routes>
        </Layout>
    );
}