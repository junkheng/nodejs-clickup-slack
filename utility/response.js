
const success = function(req, res, data) {
    return res.status(200).json(data)
}

const error = function(req, res, data) {
    return res.status(301).json(data)
}

module.exports = {
    success, error
}