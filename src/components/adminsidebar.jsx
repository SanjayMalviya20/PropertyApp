"use client"
import React from 'react'
import Footer from './Footer'
import Link from 'next/link'
const Adminsidebar = () => {
  return (
    <>
    <div className='flex flex-col border border-white w-full p-3 h-screen justify-between items-center'>
       <h1 className='text-white font-bold font-mono text-2xl ml-2'>MyBooking-App</h1>
<div className='flex flex-col gap-3 items-center'>
  <Link href={"/adminpanel/addproperty"}>
       <button  className="bg-white text-black font-bold p-3 rounded-md ">Add property</button>
  </Link>
       <button className="bg-white text-black font-bold p-3 rounded-md ">Show property</button>
       <button className="bg-white text-black font-bold p-3 rounded-md  ">favourites</button>
</div>
      
    </div>
  
    </>
  )
}

export default Adminsidebar
