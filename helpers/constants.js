require('dotenv').config()
const CLICKUP_API = 'https://api.clickup.com/api/v2'
const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN


module.exports = {
    CLICKUP_API, CLICKUP_API_TOKEN
}