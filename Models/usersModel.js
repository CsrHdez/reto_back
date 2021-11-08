const mongoose = require("mongoose")
const usersSchema = require("../Schemas/usersSchema")

const Users = mongoose.model("Users", usersSchema)

const get = async id => {
    const filter = {}
    id ? filter.id = id : null
    return await Users.find(filter)
}

const save = async data => {
    return await Users.save(data)
}

const update = async (id, data) => {
    if (!id || !data) return false
    return await Users.findByIdAndUpdate(id, data)
}

const del = async id => {
    if (!id) return false
    return await Users.findByIdAndDelete(id)
}

const search = async filters => {
    if (typeof params != "object") return false
    return await Users.find(filters)
}

module.exports = {
    get,
    save,
    update,
    del,
    search
}