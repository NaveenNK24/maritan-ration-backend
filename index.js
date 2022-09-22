const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Maritan!')
})

app.listen(port, () => {
  console.log(`maritan ration ${port}`)
})