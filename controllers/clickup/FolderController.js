const { apiRequest, apiResponse } = require('../../utility')
const auth = require("../../utility/jwt");

exports.listsFolder = [
    auth, 
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.space_id}/folder?archived=false`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.listFolder = [
    auth, 
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/folder/${req.params.id}`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.createFolder = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.space_id}/folder`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.updateFolder = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/folder/${req.params.id}`, 'PUT', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.deleteFolder = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processRequest(`/folder/${req.params.id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]