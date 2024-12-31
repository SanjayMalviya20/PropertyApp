import mongoose from "mongoose"
const AdminSchema = new mongoose.Schema({

    name: {
        type: String,
        reqiured: true
    },

    loaction: {
        type: String,
        reqiured: true
    },
    image: {
        type: String,
        reqiured: true
    },
    price: {
        type: String,
        reqiured: true
    },

    status: {
        tyep: String,
        default: "pending"
    },
    date: {
        type: Date,
        default: Date.now()
    }

})


export const Adminodel = mongoose.models.AdminModel || mongoose.model("AdminModel", AdminSchema)