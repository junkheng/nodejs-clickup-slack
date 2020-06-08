const jwt = require('jsonwebtoken')
const apiResponse = require('../../utility/response')

exports.tokenRequest = [
    async function (req, res) {
        if (req.query.username === 'admin' && req.query.password === 'admin') {
            
            let userData = {
                _id: "0001",
                firstName: "admin",
                lastName: "admin",
                email: "admin@zcool.com"
            };

            // Prepare JWT token for authentication
            const jwtPayload = userData;
            const jwtData = {
                // expressed in seconds or other time format. Eg: 60, "2 days", "10h", "7d". 
                //A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), 
                // otherwise milliseconds unit is used by default ("120" is equal to "120ms").
                expiresIn: process.env.JWT_TIMEOUT_DURATION || 36000,
            };
            const secret = process.env.JWT_SECRET || 'secret';
            //Generated JWT token with Payload and secret.
            userData.token = jwt.sign(jwtPayload, secret, jwtData);
            
            apiResponse.success(req, res, userData)
        } else {
            console.log(req.query)
            apiResponse.error(req, res, {})
        }

    }
]