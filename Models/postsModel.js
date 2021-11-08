const mongoose = require("mongoose")
const postsSchema = require("../Schemas/postsSchema")

const Posts = mongoose.model("Posts", postsSchema)

const get = async id => {
    const filter = {}
    id ? filter.id = id : null
    return await Posts.find(filter)
}

const save = async data => {
    return await Posts.save(data)
}

const update = async (id, data) => {
    if (!id || !data) return false
    return await Posts.findByIdAndUpdate(id, data)
}

const del = async id => {
    if (!id) return false
    return await Posts.findByIdAndDelete(id)
}

const search = async filters => {
    if (typeof params != "object") return false
    return await Posts.find(filters)
}

module.exports = {
    get,
    save,
    update,
    del,
    search
}