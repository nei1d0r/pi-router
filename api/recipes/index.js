const express = require('express')
const router = express.Router()

// TODO add try catch blocks
// link to model
// get routes working appropriately!

router
    .route('/')
    .get((req, res) => {
        res.status(200)
        res.send('Recipes main page')
    })

router
    .route('/:foodName')
    .get((req, res) => {
        res.status(200)
        res.send(`Get recipe by ingredient(s): ${req.params.foodName}`)
    })

module.exports = router