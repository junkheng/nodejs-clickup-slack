const express = require('express')
const {clickup} = require('../../controllers')
const router = express.Router()

router.post('/update/:id', clickup.comment.updateComment)
router.delete('/delete/:id', clickup.comment.deleteComment)

module.exports = router