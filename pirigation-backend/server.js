const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/message', (req,res) => {
	res.json({ message: 'Hello from Pirigation!' });
});

app.listen(port, () => {
	console.log(`Pirigation Server running on port ${port}`);
});
