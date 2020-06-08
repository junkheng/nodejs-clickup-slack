const express = require('express')
const app = express()

const {clickupRoute, authRoute} = require('./routes')
// const clickupLists = require('./routes/clickup/clickupLists')
// const clickupFolders = require('./routes/clickup/clickupFolders')
// const clickupSpaces = require('./routes/clickup/clickupSpaces')
// const clickupComments = require('./routes/clickup/clickupComments')

const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

app.use(bodyParser.json());

app.use('/clickup/tasks', clickupRoute.tasks)
app.use('/clickup/lists', clickupRoute.lists)
app.use('/clickup/folders', clickupRoute.folders)
app.use('/clickup/spaces', clickupRoute.spaces)
app.use('/clickup/comments', clickupRoute.comments)

app.use('/token', authRoute)

app.listen(port, () => console.log(`server is running at ${port}`))