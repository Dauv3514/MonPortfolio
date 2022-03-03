const fs = require("fs");
const express = require("express");

const app = express();

app.set("views", `${__dirname}/public`);
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    const accueil = "index";
    res.render(accueil);
});

app.get("/cv", (req, res) => {
    const cv = `${__dirname}/public/img/CVValentinDauvier.pdf`;
    fs.readFile(cv, (err, data) => {
        res.contentType("application/pdf");
        res.send(data);
    })
});


app.listen(3000, () =>{
    console.log("serveur lancé");
});