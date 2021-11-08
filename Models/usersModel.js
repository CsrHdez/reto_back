const mongoose = require("mongoose")
const usersSchema = require("../Schemas/usersSchema")

const Users = mongoose.model("Users", usersSchema)

const get = async id => {
    const filter = {}
    id ? filter.id = id : null
    return await Users.find(filter).exec()
}

const save = async data => {
    const newUser = new Users(data)
    return await newUser.save()
}

const update = async (id, data) => {
    if (!id || !data) return false
    return await Users.findByIdAndUpdate(id, data).exec()
}

const del = async id => {
    if (!id) return false
    return await Users.findByIdAndDelete(id).exec()
}

const search = async filters => {
    if (typeof params != "object") return false
    return await Users.find(filters).exec()
}

module.exports = {
    get,
    save,
    update,
    del,
    search
}