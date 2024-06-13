const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('calc')
})

const calcRouter = require('./routes/calc')

app.use('/calc', calcRouter)

app.listen(3000)