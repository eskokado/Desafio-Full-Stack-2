const express = require('express')
const app = express();
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  res.send({
    success: true,
    message: 'Hello world'
  })
})

app.use('/api/users', require('./routes/users'))
app.use('/api/transactions', require('./routes/transactions'))
app.use('/api/users', require('./routes/userRoute'))

app.listen(port, () => {
  console.log(`Connection successfully on port ${port}`)
})
