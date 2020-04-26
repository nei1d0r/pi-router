const express = require('express')
const router = express.Router()

// TODO add try catch blocks
// link to model
// get routes working appropriately!

router
    .route('/')
    .get((req, res) => {
        res.status(200)
        res.send('GET my food')
    })
    .post((req, res) => {
        const { body } = req

        res.status(201)
        res.json(body)
    })

router
    .route('/:foodId')
    .get((req, res) => {
        res.status(200)
        res.send(`Get food by id: ${req.params.foodId}`)
    })
    .put((req, res) => {
        res.status(202)
        res.send(`update food by id: ${req.params.foodId}`)
    })
    .delete((req, res) => {
        res.status(204)
        res.send(`deleted food: ${req.params.foodId}`)
    })

module.exports = router