const { apiRequest, apiResponse } = require('../../utility')
const auth = require("../../utility/jwt");

// Creating and Viewing comments in tasks/lists are in their respective routes/controllers

// Update any Comment based on ID
exports.updateComment = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/comment/${req.params.id}`, 'PUT', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

// Delete any Comment based on ID
exports.deleteComment = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/comment/${req.params.id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]