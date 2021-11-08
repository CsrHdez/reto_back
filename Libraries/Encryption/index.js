const bcrypt = require("bcrypt")

const encryptPass = {
    hashPassword: async password => {
        return await bcrypt.hash(password, 10)
    },

    verifyPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash)
    }
}

module.exports = {
    encryptPass
}