import React, { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('/api/message')
		.then(response => response.json())
		.then(message => setMessage(data.message));
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
