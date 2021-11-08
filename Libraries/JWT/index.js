const jsonwebtoken = require("jsonwebtoken")
//const config = require("dotenv").config()

const sign = async payload => {
    const secret = process.env.JWT_SECRET
    return await jsonwebtoken.sign(payload, secret)
}

const verify = async token => {
    const secret = process.env.JWT_SECRET
    return await jsonwebtoken.verify(token, secret)
}

module.exports = {
    sign,
    verify
}