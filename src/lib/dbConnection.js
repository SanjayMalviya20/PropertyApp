import mongoose from "mongoose"
export const DatabseConnect=async()=>{
    await mongoose.connect("mongodb+srv://sanjay:sanjaymalviyamongodb@sanjay.fdp92.mongodb.net/").then(()=>{
        console.log("databse connect succesfully")
    })
    console.log("databse")
}