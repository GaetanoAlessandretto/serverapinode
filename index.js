const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', async (req, res) => {
    const response = await fetch('https://mockend.up.railway.app/api/products');
    const products = await response.json();

    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});