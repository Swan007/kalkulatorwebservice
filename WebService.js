const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const infixToPostfix = require('./lib/infixToPostfix');
const calculator = require('./lib/postfixCalculator');
const app = express();
const port = 9090;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendfile('./index.html'));
app.post('/calculate', (req, res) => {
    console.log(req.body.formula);
    const postfix = infixToPostfix(req.body.formula);
    const hasil = calculator(postfix);
    res.send(hasil.toString());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
