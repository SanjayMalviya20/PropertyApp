import { DatabseConnect } from "@/lib/dbConnection"
import { Usermodel } from "@/lib/models/UserModel"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const loadDb = async () => {
    await DatabseConnect()
}
loadDb()


export const POST = async (req) => {
    try {
        const formData = await req.formData();
        const email = formData.get("email")?.trim();
        const password = formData.get("password")?.trim();
        const id = formData.get("id")?.trim();

        // Validate input
        if (!email || !password || !id) {
            return NextResponse.json({ msg: "All fields are required" }, { status: 400 });
        }

        // Find user by ID
        const user = await Usermodel.findById(id);
        if (!user) {
            return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
        }

        // Verify email
        if (user.email !== email) {
            return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ msg: "Invalid credentials" }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id },"JWT_SECRET", { expiresIn: '3h' });

        // Return success response
        return NextResponse.json({ success: true, user: { id: user._id, email: user.email }, token }, { status: 200 });

    } catch (error) {
        console.error("Error in POST request:", error.message);
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
    }
};