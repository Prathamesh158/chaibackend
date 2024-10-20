require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Hello prathamesh')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello from H1 tag </h1>')
})

app.get('/signup',(req,res)=>{
    res.send('Hello take tea break ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
