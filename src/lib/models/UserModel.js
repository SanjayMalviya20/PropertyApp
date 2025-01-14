
const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now()

        }
    }
)


export const Usermodel = mongoose.models.UserDetails || mongoose.model("UserDetails", UserSchema)
