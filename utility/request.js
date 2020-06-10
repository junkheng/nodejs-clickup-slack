const axios = require('axios');
const helper = require("../helpers")
const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;

// Initialize
const web = new WebClient(token);

const slackPosting = async(data) => {
    const result = await web.chat.postMessage({
        text: 'New task created here: ' + data.url,
        channel: process.env.SLACK_CHANNEL_ID
    });
    console.log(result)
}


const processClickUpRequest = (url, method, data)=> {
    const reqURL = helper.constants.CLICKUP_API + url;
    return processRequest(reqURL, helper.constants.CLICKUP_API_TOKEN, method, data)
}

const processRequest = async function(url, auth, method, data={}){
    return await axios({
        method,
        url,
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        json: true,
        data
    },console.log(data)).then(data => data).catch(error=>{
        return {error, data: {}}
    })
}

module.exports = {
    processRequest, processClickUpRequest, slackPosting
}