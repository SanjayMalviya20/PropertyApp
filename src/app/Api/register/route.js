import { DatabseConnect } from "@/lib/dbConnection"
import { Userodel } from "@/lib/models/UserModel"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";

const loadDb = async () => {
    await DatabseConnect()
}
loadDb()

export const POST = async (req) => {
    const formdata = await req.formData()
    try {
        if (!formdata.get("name") || !formdata.get("email") || !formdata.get("password")) {
            return;
        }
        const password = formdata.get("password")
        const salt = await bcrypt.genSalt(8)
        const hashpassword = await bcrypt.hash(password, salt)
        const UserData = await Userodel.create({
            name: `${formdata.get("name")}`,
            email: `${formdata.get("email")}`,
            password: hashpassword,

        })
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, "JWT_SECRET", { expiresIn: '3h' });
        return NextResponse.json({ success: true, msg: "account create", UserData ,token})

    } catch (error) {
        console.log(error.message)
    }

}