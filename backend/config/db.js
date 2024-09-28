import mongoose  from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://manishrwat15:UI5AXSldwJa1NjD6@cluster0.bzj3x.mongodb.net/Go-Foodie').then(() => console.log("DB Connected"));
}

