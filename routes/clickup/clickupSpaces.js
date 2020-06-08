const express = require('express')
const {clickup} = require('../../controllers')
const router = express.Router()

router.get('/all/:team_id', clickup.space.listsSpace)
router.get('/:id', clickup.space.listSpace)
router.post('/create/:team_id', clickup.space.createSpace)
router.post('/update/:id', clickup.space.updateSpace)
router.delete('/delete/:id', clickup.space.deleteSpace)

module.exports = router