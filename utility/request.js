const axios = require('axios');
const helper = require("../helpers")


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
    processRequest, processClickUpRequest
}