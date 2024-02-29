var https = require('https');
const express = require('express')
const fetch = require('node-fetch');
const cors = require('cors'); // Aggiungi questa linea

const app = express();



app.use(cors());


app.get('/products', async (req, res) => {
    const response = await fetch('https://mockend.up.railway.app/api/products');
    const products = await response.json();

    res.json(products);
});

app.listen(3001, function () {
    console.log("Server is running");
});

