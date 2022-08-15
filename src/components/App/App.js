import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Create from '../Create/Create';
import Signup from '../Signup/Signup';
import useToken from './useToken';

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
        <h1>Job Posting Website</h1>
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;