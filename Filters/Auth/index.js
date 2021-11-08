const jwt = require("../../Libraries/JWT")
const Posts = require("../../Models/postsModel")

const auth = {
    isLogged: async function (req, res, next) {
        try {
            const {token} = req.headers
            await jwt.verify(token)
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    createPosts: async function (req, res, next) {
        const { token } = req.headers
        try {
            const tokenPayload = await jwt.verify(token)
            req.body.postsData._userId = tokenPayload.sub
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    modifyPost: async (req, res, next) => {
        const { token } = req.headers
        const { id } = req.params
        try {
            const tokenPayload = await jwt.verify(token)
            const posts = await Posts.get(id)
            if (posts._userId != tokenPayload.sub) throw new Error("No permissions")
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    modifyUser: async (req, res, next) => {
        const { token } = req.headers
        const { id } = req.params
        try {
            const tokenPayload = await jwt.verify(token)
            if (id != tokenPayload.sub) throw new Error("No permissions")
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    }
}

module.exports = auth