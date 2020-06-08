const express = require('express')
// const TaskController = require('../../controllers/clickup/TaskController')
const {auth} = require('../controllers')
const router = express.Router()

router.get('/fetch', auth.tokenRequest)
// router.get('/refresh', clickup.task.taskList)

module.exports = router