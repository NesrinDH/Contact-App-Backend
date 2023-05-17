const express = require('express')
const cors = require('cors')
const app = express()
const port = 2600
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/merndb');
  console.log('db connected') 
}

app.get('/', (req, res) => {
    res.send('Hello Word')
})
//les routes
const contactRoutes = require('./Routes/contactRoute')
app.use('/contact', contactRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})