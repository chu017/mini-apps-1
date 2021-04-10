const express = require('express')
const app = express()
const port = 3000

const db = require('./database')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route handler - get request
app.get('/checkout', function (req, res) {

  const getAll = function(callback) {
      var queryStr = 'SELECT * FROM personal_information';

      db.query(queryStr, function (err, data) {
        if (err) {
          console.log('test-model-err')
          res.sendStatus(404);
        } else {
          console.log('test-model-send')
          callback(err, data);
        }
      })
  }

  getAll(function (err, data) {
    if (err) {
      console.log('test-controller-err')
      res.sendStatus(404);
    } else {
      console.log('test-controller-send')
      res.send(data);
    }
  })
})


// route handler - get request
app.post('/checkout', function (req, res) {

  console.log('request: ', req.body.password);

  var params = [ req.body.full_name, req.body.email, req.body.password ];

  // model lader
  const create = function(params, callback) {
      var queryStr = 'INSERT INTO personal_information(full_name, email, password) VALUES (?, ?, ?)';

      db.query(queryStr, params, function (err, data) {
        if (err) {
          console.log('test-model-err')
          // console.log(err);
          res.status(404).send(err);
        } else {
          console.log('test-model-send')
          callback(err, data);
        }
      })
  }

  // controller layer
  create(params, function (err, data) {
    if (err) {
      console.log('test-controller-err')
      res.status(404).send(err);
    } else {
      console.log('test-controller-send')
      res.status(200).send(data);
    }
  })
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// kill $(lsof -ti:3000)