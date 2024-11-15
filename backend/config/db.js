import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://amanbaranwal2017:fooddelishery@fooddel.oph54.mongodb.net/food-del').then(()=>console.log("DB Connected")).catch((error) => console.log("DB Connection Error:", error));
}