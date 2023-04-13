import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {type: String, match: /^[\w\s\.]{4,80}$/, required: true},
    username: {type: String, match: /^[\w\._-]{2,45}$/, unique: true, required: true},
    email: {
        type: String,
        match: /^[\w\._-ñÑ]+@[\w-]+(?:\.[\w-]+)*$/, 
        unique: true,
        required: true
    },
    password: { type: String, required: true},
    rol: {type: String, default: "user", enum:["user", "admin"]},
    enable: {type: Boolean, default: true},
    phone: {type: String},
    address: {
        street: {type: String},
        suite: {type: String},
        city: {type: String},
        zipcode: {type: String}
    },
    birth: Date,
})

const User = mongoose.model("User", schema)

export default User