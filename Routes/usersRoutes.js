const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        ok: true,
        message: "Users list",
        payload: [
            {name: "Cesar", lastName: "Hernandez", age: 29},
            {name: "Oscar", lastName: "Perez", age: 49}
        ]
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        ok: true,
        message: "User info",
        payload: {name: "Cesar", lastName: "Hernandez", age: 29, id}
    })
})

router.post("/", (req, res) => {
    const { userData } = req.body
    userData.id = 1
    res.status(201).json({
        ok: true,
        message: "User created",
        payload: userData
    })
})

router.patch("/:id", (req, res) => {
    const { id } = req.params
    const { userDataUpdate } = req.body
    userDataUpdate.id = parseInt(id)
    res.status(200).json({
        ok: true,
        message: "User updated",
        payload: userDataUpdate
    })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        ok: true,
        message: "User deleted",
        payload: id
    })
})

module.exports = router