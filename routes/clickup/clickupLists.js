const express = require('express')
const {clickup} = require('../../controllers')
const router = express.Router()

router.get('/all/:folder_id', clickup.list.listsList)
router.get('/:id', clickup.list.listList)
router.post('/create/:folder_id', clickup.list.createList)
router.post('/update/:id', clickup.list.updateList)
router.delete('/delete/:id', clickup.list.deleteList)

router.get('/folderless/view/:space_id', clickup.list.listFolderlessList)
router.post('/folderless/create/:space_id', clickup.list.createFolderlessList)

router.get('/:list_id/fields', clickup.list.getCustomFields)

router.get('/:id/comment', clickup.list.listListComment)
router.post('/:id/comment', clickup.list.createListComment)

module.exports = router