const usersRoutes = require("./usersRoutes")
const postsRoutes = require("./postsRoutes")
const authRotes = require("./authRoutes")

const routes = app => {
    app.use("/auth", authRotes)
    app.use("/users", usersRoutes)
    app.use("/posts", postsRoutes)
}

module.exports = routes