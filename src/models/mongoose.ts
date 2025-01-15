const mongoose = require('mongoose');
require('dotenv/config');
export async function initializeMongoDB(){
    return await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@lista-de-compras.xjm3a.mongodb.net/?retryWrites=true&w=majority&appName=lista-de-compras`)
}

export const Product = mongoose.model('Product', {
    id: Number,
    name: String,
    link: String,
    photo: String,
    price: String,
    userId: Number,
    listId: Number,
    priority: String,
    category: String,
    status: Boolean,
    createdAt: Date,
})

export const List = mongoose.model('List', {
    name: String,
    description: String,
    idUser: String
})

export const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
})
