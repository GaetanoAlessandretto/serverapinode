var https = require('https');
const express = require('express')

const app = express();

app.get("/products", function (req, res) {
    const url = "https://mockend.up.railway.app/api/products";

    https.get(url, function (response) {
        let data = '';

        response.on('data', function (chunk) {
            data += chunk;
        });

        response.on('end', function () {
            res.json(data);
        });
    });
});

app.listen(3009, function () {
    console.log("Server is running on port 3009.");
});
module.exports = app