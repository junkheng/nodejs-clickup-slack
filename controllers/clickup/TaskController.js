const { apiRequest, apiResponse, slackPosting } = require('../../utility')
const auth = require("../../utility/jwt");

// Get all Unarchived tasks
exports.tasksList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.list_id}/task?archived=false`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Get a Single Task
exports.taskList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/task/${req.params.id}`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Create New Task
exports.taskCreate = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.list_id}/task`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
            const slack = await apiRequest.slackPosting(response.data)
        }
    }
]

// Update a Task
exports.taskUpdate = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/task/${req.params.id}`, 'PUT', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Delete a Task
exports.taskDelete = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/task/${req.params.id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]


// Set Custom Field
exports.customFieldUpdate = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/task/${req.params.id}/field/${req.params.cf_id}`, 'POST')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Delete Custom Field Value
exports.removeCustomFieldValue = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/task/${req.params.id}/field/${req.params.cf_id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]


// Get Subtask List
exports.taskSubtaskList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.list_id}/task?archived=false&subtasks=true&parent=${req.params.id}`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]
