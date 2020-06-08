const express = require('express')
const {clickup} = require('../../controllers')
const router = express.Router()


router.get('/all/:space_id', clickup.folder.listsFolder)
router.get('/:id', clickup.folder.listFolder)
router.post('/create/:space_id', clickup.folder.createFolder)
router.post('/update/:id', clickup.folder.updateFolder)
router.delete('/delete/:id', clickup.folder.deleteFolder)

module.exports = router