const express = require("express")
const Users = require("../Models/usersModel")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const users = await Users.get()
        res.status(200).json({
            ok: true,
            message: "Users list",
            payload: users
        })
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const users = await Users.get(id)
        res.status(200).json({
            ok: true,
            message: "Users list",
            payload: users
        })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    const { userData } = req.body
    try {
        const newUser = await Users.save(userData)
        res.status(201).json({
            ok: true,
            message: "User created",
            payload: newUser
        })
    } catch (err) {
        next(err)
    }
})

router.patch("/:id", async (req, res, next) => {
    const { id } = req.params
    const { userDataUpdate } = req.body
    try {
        const userUpdated = await Users.update(id, userDataUpdate)
        res.status(200).json({
            ok: true,
            message: "User updated",
            payload: userUpdated
        })
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        const userDelecte = await Users.del(id)
        res.status(200).json({
            ok: true,
            message: "User deleted",
            payload: userDelecte
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router