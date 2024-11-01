import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteList from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import FormPage from './pages/FormPage';
import OrientationDetector from './components/OrientationDetect';

function App() {

    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
    );
    
    const handleOrientationChange = (newOrientation: 'portrait' | 'landscape') => {
        setOrientation(newOrientation);
    };


    return (
        <>
        <OrientationDetector onOrientationChange={handleOrientationChange} />
            {orientation === 'landscape'&&
                <div className="landscapeDisplay">
                    <h3>Приложение работает исключительно в портретном режиме</h3>
                </div>
        }
        {orientation === 'portrait'&&
            <Router basename=''>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/list' element={<NoteList />}></Route>
                    <Route path='/note/:id' element={<NotePage />}></Route>
                    <Route path='/form' element={<FormPage />}></Route>
                </Routes>
            </Router>
        }
        </>
    );
}

export default App;
