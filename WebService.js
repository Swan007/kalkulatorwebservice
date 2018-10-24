const express = require('express');
const bodyParser = require('body-parser');
const infixToPostfix = require('./lib/infixToPostfix');
const calculator = require('./lib/postfixCalculator');
const app = express();
const port = 80;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World'));
app.post('/calculate', (req, res) => {
    console.log(req.body.formula);
    const postfix = infixToPostfix(req.body.formula);
    const hasil = calculator(postfix);
    res.send(hasil.toString());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));