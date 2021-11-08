const express = require("express")
const Posts = require("../Models/postsModel")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const posts = await Posts.get()
        res.status(200).json({
            ok: true,
            message: "Posts list",
            payload: posts
        })
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const posts = await Posts.get(id)
        res.status(200).json({
            ok: true,
            message: "Posts list",
            payload: posts
        })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    const { postsData } = req.body
    postsData.createdAt = Date.now()
    postsData._userId = "618968b4141a1895990d5374"
    try {
        const newPosts = await Posts.save(postsData)
        res.status(201).json({
            ok: true,
            message: "Posts created",
            payload: newPosts
        })
    } catch (err) {
        next(err)
    }
})

router.patch("/:id", async (req, res, next) => {
    const { id } = req.params
    const { postsDataUpdate } = req.body
    try {
        const postsUpdated = await Posts.update(id, postsDataUpdate)
        res.status(200).json({
            ok: true,
            message: "Posts updated",
            payload: postsUpdated
        })
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const postsDeleted = await Posts.del(id)
        res.status(200).json({
            ok: true,
            message: "Posts deleted",
            payload: postsDeleted
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router