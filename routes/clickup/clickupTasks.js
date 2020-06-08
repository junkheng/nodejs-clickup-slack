const express = require('express')
const {clickup} = require('../../controllers')
const router = express.Router()

router.get('/all/:list_id', clickup.task.tasksList)
router.get('/:id', clickup.task.taskList)
router.post('/create/:list_id', clickup.task.taskCreate)
router.post('/update/:id', clickup.task.taskUpdate)
router.delete('/delete/:id', clickup.task.taskDelete)

router.get('/subtasks/:list_id/:id', clickup.task.taskSubtaskList)

router.post('/:id/field/:cf_id', clickup.task.customFieldUpdate)
router.delete('/:id/field/:cf_id', clickup.task.removeCustomFieldValue)
module.exports = router