const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        ok: true,
        message: "Posts list",
        payload: [
            {title: "Posts 1", contentPosts: "<h1>Hola Escuela de Código</h1>\n<p>Contenido de este posts</p>", date: Date.now()},
            {title: "Posts 2", contentPosts: "<h1>Hola Escuela de Código</h1>\n<p>Contenido de este segundo posts</p>", date: Date.now()}
        ]
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        ok: true,
        message: "Posts",
        payload: {title: "Posts 1", contentPosts: "<h1>Hola Escuela de Código</h1>\n<p>Contenido de este posts</p>", date: Date.now(), id}
    })
})

router.post("/", (req, res) => {
    const { postsData } = req.body
    postsData.id = 1
    res.status(201).json({
        ok: true,
        message: "Posts created",
        payload: postsData
    })
})

router.patch("/:id", (req, res) => {
    const { id } = req.params
    const { postsDataUpdate } = req.body
    postsDataUpdate.id = parseInt(id)
    res.status(200).json({
        ok: true,
        message: "Posts updated",
        payload: postsDataUpdate
    })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        ok: true,
        message: "Posts deleted",
        payload: id
    })
})

module.exports = router