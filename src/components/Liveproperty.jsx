"use client"
import Image from 'next/image'
import React from 'react'
import sample from "../assets/sample.jpg"
const Liveproperty = () => {
  return (
    <>
    <div className="flex justify-center m-4  gap-3 items-center flex-wrap ">
       <button className="bg-white text-black font-bold p-3 rounded-md ">Filter property's</button>
    </div>
    <div className="flex gap-3 items-center flex-wrap ">

      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-3">
      <Image  src={sample}  alt={"property_image"} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{"name"}</div>
        <p className="text-white text-base">{"loaction"}</p>
        <p className="text-white text-base">${"3000"}</p>
     
      </div>
    </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-3">
      <Image  src={sample}  alt={"property_image"} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{"name"}</div>
        <p className="text-white text-base">{"loaction"}</p>
        <p className="text-white text-base">${"3000"}</p>
     
      </div>
    </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-3">
      <Image  src={sample}  alt={"property_image"} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{"name"}</div>
        <p className="text-white text-base">{"loaction"}</p>
        <p className="text-white text-base">${"3000"}</p>
     
      </div>
    </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-3">
      <Image  src={sample}  alt={"property_image"} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{"name"}</div>
        <p className="text-white text-base">{"loaction"}</p>
        <p className="text-white text-base">${"3000"}</p>
     
      </div>
    </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-3">
      <Image  src={sample}  alt={"property_image"} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{"name"}</div>
        <p className="text-white text-base">{"loaction"}</p>
        <p className="text-white text-base">${"3000"}</p>
     
      </div>
    </div>
 
    
    </div>
    </>
  )
}

export default Liveproperty
