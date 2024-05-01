import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
        .then(response => response.json())
        .then(data => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Sprinkler System Status: {message}
                </p>
            </header>
            <HomePage /> 
        </div>
    );
}

export default App;
