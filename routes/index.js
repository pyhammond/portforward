const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', (req, res, next) => controller.display(req, res, next))
router.post('/', (req, res, next) => controller.change(req, res, next))

module.exports = router