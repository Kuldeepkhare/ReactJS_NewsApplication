import React from 'react';
import './App.css';
import DashboardComponent from './components/DashboardComponent';

/**
 * This is the root app component
 * @returns {*}
 * @constructor
 */
function App() {
    return (
        <div className="App">
            <DashboardComponent/>
        </div>
    );
}

export default App;
