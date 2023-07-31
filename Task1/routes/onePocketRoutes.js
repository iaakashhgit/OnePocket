const express = require('express')
const router = express.Router()
const onePocketFunction = require('../controllers/onePocket')

router.get("/",onePocketFunction.onePocket)

module.exports = router