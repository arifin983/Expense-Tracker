const mongoose = require("mongoose")
const expenseSchema = new mongoose.Schema({
    title:String,
    amount:Number,
    date: String,
    id: String
})
module.exports =  mongoose.model("expenseitems",expenseSchema);