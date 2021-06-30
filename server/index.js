const express = require("express");

const app = express();

app.use(express.json());

app.get('/',function(req, res) {
    res.send("Site Builder Web App");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Site Builder Web Application on port ${port}`)
});