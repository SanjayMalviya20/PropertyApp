"use client"

import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!UserData.name || !UserData.email || !UserData.password) {
      return alert("all field are required")
    }
    const formdata = new FormData()
    formdata.append("name", UserData.name)
    formdata.append("email", UserData.email)
    formdata.append("password", UserData.password)
    const res = await fetch("http://localhost:3000/Api/register", {
      method: "POST",
      body: formdata
    })
const Data =await res.json()
console.log(Data)
  }
  const handleOnchange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2 p-3 bg-black border border-white  text-black">
          <input name="name" onChange={handleOnchange} className="p-3  rounded-full" type="text" placeholder="name" />
          <input name="email" onChange={handleOnchange} className="p-3 rounded-full " type="email" placeholder="enter your email" />
          <input name="password" onChange={handleOnchange} className="p-3 rounded-full " type="text" placeholder="enter your password" />
          <div className="flex justify-between items-center cursor-pointer">
            <button className="btn bg-blue-600 w-1/2 rounded-full cursor-pointer">register</button>
            <Link href={"/login"}>
            <h1 className="text-white">Sign-in</h1>
            </Link>
          </div>
        </form>
      </div>

    </>
  )
}

export default Register
