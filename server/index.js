const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Listening on ${PORT}`))

app.use(volleyball)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


module.exports = app