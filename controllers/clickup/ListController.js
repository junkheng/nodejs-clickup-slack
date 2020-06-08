const { apiRequest, apiResponse } = require('../../utility')
const auth = require("../../utility/jwt");

exports.listsList = [
    auth, 
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/folder/${req.params.folder_id}/list?archived=false`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.listList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.id}`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.createList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/folder/${req.params.folder_id}/list`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.updateList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.id}`, 'PUT', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.deleteList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Folderless
// Get Unarchived Folderless lists
exports.listFolderlessList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.space_id}/list?archived=false`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Create Folderless list
exports.createFolderlessList = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.space_id}/list`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Get Accessible Custom Fields
exports.getCustomFields = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.list_id}/field`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Get List Comments
exports.listListComment = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.id}/comment`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Create List Comments
exports.createListComment = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/list/${req.params.id}/comment`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]