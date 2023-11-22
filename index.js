const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/functionalyt.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'functionalyt.js'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
