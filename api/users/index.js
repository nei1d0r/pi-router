const express = require('express')
const router = express.Router()

// TODO add try catch blocks
// link to model
// get routes working appropriately!

router
    .route('/')
    .get((req, res) => {
        res.status(200)
        res.send('GET users')
    })
    .post((req, res) => {
        const { body } = req

        res.status(201)
        res.json(body)
    })

router
    .route('/:userId')
    .get((req, res) => {
        res.status(200)
        res.send(`Get user: ${req.params.userId}`)
    })
    .put((req, res) => {
        try{
            res.status(202)
            res.send(`update user: ${req.params.userId}`)
        }
        catch {
            res.status(500)
        }

    })
    .delete((req, res) => {
        res.status(204)
        res.send(`delete user: ${req.params.userId}`)
    })


module.exports = router