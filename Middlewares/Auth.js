const Auth = require("../Filters/Auth")

const auth = app => {
    app.post("/posts", Auth.createPosts)
    app.patch("/posts/:id", Auth.modifyPost)
    app.delete("/posts/:id", Auth.modifyPost)
    app.get("/users/id", Auth.isLogged)
    app.patch("/users/id", Auth.modifyUser)
    app.delete("/users/id", Auth.modifyUser)
}

module.exports = auth