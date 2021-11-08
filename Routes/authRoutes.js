const express = require("express")
const { sign } = require("../Libraries/JWT")
const Users = require("../Models/usersModel")
const { encryptPass } = require("../Libraries/Encryption")

const router = express.Router()

router.post("/login", async (req, res, next) => {
    const { userLogin } = req.body
    const user = await Users.getParams({username: userLogin.username})
    const isMatch = await encryptPass.verifyPassword(userLogin.password, user.password)
    if (isMatch) {
        const payload = {
            sub: user._id,
            role: user.role,
            exp: (Date.now() / 1000) + (60 * 60)
        }
        const token = await sign(payload)
        res.status(200).json({
            ok: true,
            message: "Sign in successful",
            payload: {token}
        })
    } else {
        res.status(401).json({
            ok: false,
            message: "Credentials invalidates"
        })
    }
})

module.exports = router