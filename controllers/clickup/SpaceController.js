const { apiRequest, apiResponse } = require('../../utility')
const auth = require("../../utility/jwt");

exports.listsSpace = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/team/${req.params.team_id}/space?archived=false`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.listSpace = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.id}`, 'GET')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.createSpace = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/team/${req.params.team_id}/space`, 'POST', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.updateSpace = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.id}`, 'PUT', req.body)
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]

exports.deleteSpace = [
    auth,
    async function (req, res) {
        const response = await apiRequest.processClickUpRequest(`/space/${req.params.id}`, 'DELETE')
        if (response.error) {
            apiResponse.error(req, res, response.data)
        } else {
            apiResponse.success(req, res, response.data)
        }
    }
]