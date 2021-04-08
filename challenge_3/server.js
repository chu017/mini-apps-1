const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/checkout/:id', (req, res) => {
  res.send('Hello World!')





})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// kill $(lsof -ti:3000)