const express = require('express');
const app = express();

app.get('/', (req, res) =>{
        res.send('Hello and Welcome from Nodejs App from Deploy project using docker and container');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
        console.log('Server is running on http://localhost:${PORT}');
});

module.exports = app;
