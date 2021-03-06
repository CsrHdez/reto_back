const express = require("express")
const routes = require("./Routes")
const db = require("./Libraries/DB")
const auth = require("./Middlewares/Auth")
const app = express()

// Settings
app.set("port", process.env.PORT || 8000)

// Middlewares
app.use(express.json())
auth(app)

// Routes
app.get("/", (req, res) => {
    res.json({
        ok: true,
        message: "Todo ok",
    })
})
routes(app)

// Server running
app.listen(app.get("port"), () => {
    console.log(`Server running on localhost:${app.get("port")}`)
    db.connect()
        .then(() => {
            console.log("DB Connected")
        })
        .catch(err => {
            console.error("Connection refused ", err)
        })
})