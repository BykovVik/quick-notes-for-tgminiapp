import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router basename=''>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
