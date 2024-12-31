"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-white p-3 w-full flex items-center flex-col'>
                <div className='flex gap-3 items-center justify-between w-full'>
                    
                    <h1 className='text-black font-bold font-mono text-2xl ml-2'>MyBooking-App</h1>
                    <div className='flex gap-3'>
                        <Link href={"/adminpanel"}>
                            <button className='p-3 bg-white border border-black text-black rounded-full'>Add your property</button>
                        </Link>
                        <Link href={"/register"}>
                            <button className='p-3 bg-blue-600 rounded-full'>register</button>
                        </Link>
                        <Link href={"/login"}>
                            <button className='p-3 bg-blue-600 rounded-full'>sign-in</button>
                        </Link>
                    </div>
                </div>

                <div className='mb-3 mt-4'>
                    <h1 className='text-3xl  text-black font-extrabold'>Welcome to MyBookingApp</h1>
                    <h1 className='text-center text-black mt-2 font-bold'>Search deals on property, homes, and much more..</h1>
                </div>

            </div>

        </>
    )
}

export default Navbar
