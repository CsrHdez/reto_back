const usersRoutes = require("./usersRoutes")
const postsRoutes = require("./postsRoutes")

const routes = app => {
    app.use("/users", usersRoutes)
    app.use("/posts", postsRoutes)
}

module.exports = routes