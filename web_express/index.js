const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(rep, res) => {
  res.send("con metodo POST");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
