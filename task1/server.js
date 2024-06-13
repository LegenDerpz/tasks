const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) =>{
    res.json({msg : "Hello World!"})
})

app.listen(3000)