// Basic Express server skeleton
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Roblox Username Hunter Bot backend running!'));
app.listen(port, () => console.log(`Server listening on port ${port}`));
