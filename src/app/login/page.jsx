"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Login = () => {
    const [UserData, setUserData] = useState({
        email: "",
        password: ""
    });
    const handlechange = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("email", UserData.email)
        formdata.append("password", UserData.password)
        formdata.append("id", "6773af97f319066c82d6cb6f")  //test id
        if (UserData.email === "" || UserData.password === "") {
            return alert("Creadintels required")
        }
        const res = await fetch("http://localhost:3000/Api/login", {
            method: "POST",
            body: formdata
        })
        const data = await res.json()
        setUserData({
            email: "",
            password: ""
        })
        console.log(data)

    }
    return (
        <>
            <div className="h-screen w-full flex items-center justify-center">
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2   p-3 bg-black border border-white">
                    <input value={UserData.email} onChange={handlechange} className="p-3 rounded-full text-black " type="email" name="email" placeholder="enter your email" />
                    <input value={UserData.password} onChange={handlechange} className="p-3 rounded-full  text-black" type="text" name='password' placeholder="enter your password" />
                    <div className="flex justify-between items-center cursor-pointer gap-3">
                        <button className="btn bg-blue-600 w-1/2 rounded-full cursor-pointer">Login</button>
                        <Link href={"/register"}>
                            <h1 className='text-sm'>Create ne account</h1>
                        </Link>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login
