import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
        .then(response => response.json())
        .then(data => setMessage(data.message)); // Changed 'message' to 'data' to avoid confusion
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Message from the server: {message}
                </p>
            </header>
        </div>
    );
}

export default App;
