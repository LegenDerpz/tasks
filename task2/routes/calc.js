const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        res.render('calc')
    }).post((req, res) => {
        if(req.body.x == ""){
            req.body.x = 0
        }
        if(req.body.y == ""){
            req.body.y = 0
        }
        result = parseInt(req.body.x) + parseInt(req.body.y)

        console.log(result)
        res.render('calc', {result: result})
    })

module.exports = router