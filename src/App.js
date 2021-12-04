import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from './components/DetailsPage/DetailsPage';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/details/:flightId' element={<DetailsPage />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;