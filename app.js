const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from current folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    res.send(`Received: ${username}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
