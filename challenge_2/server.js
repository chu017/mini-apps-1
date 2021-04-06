const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(express.static('client'));

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route handler
app.post('/upload_json', urlencodedParser, (req, res) => {
  console.log(req.body);

  res.send('received POST!');

})

// JSON to CSV_report logic - Tree Map
const generate = function(req, res) {

}

const create = function(params, callback) {

}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

