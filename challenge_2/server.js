const express = require('express');
const bodyParser = require('body-parser');
const csv = require('./generator');

const app = express()
const port = 3000

app.use(express.static('client'));

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route handler - post request
app.post('/upload_json', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send('received POST!');

  csv.generateCsv(req, res);

})


// route handler - get request
app.get('/csv_file', function (req, res, next) {
  console.log('received GET!');

  // const options = {
  //   root: path.join(__dirname, '/csv_file'),
  //   dotfiles: 'deny',
  //   headers: {
  //     'x-timestamp': Date.now(),
  //     'x-sent': true
  //   }
  // }
})


/*
express res.sendFile()

https://bezkoder.com/node-js-express-download-file/

DISPLAY THE FILE
res.end(‘<html>...<div>’ + csvString + ‘</div>....</html>’)

*/



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

