import mongoose, {mongo} from "mongoose"

async function dbConnection(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.fy15gyy.mongodb.net/bookstore?retryWrites=true&w=majority")

    return mongoose.connection
} 

export default dbConnection