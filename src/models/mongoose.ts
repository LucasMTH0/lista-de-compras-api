const mongoose = require('mongoose');
require('dotenv/config');
export async function initializeMongoDB(){
    return await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@lista-de-compras.xjm3a.mongodb.net/?retryWrites=true&w=majority&appName=lista-de-compras`)
}

export const ProductModel = mongoose.model('Product', {
    id: Number,
    name: String,
    url: String,
    image: String,
    price: String,
    userId: String,
    listId: String,
    priority: String,
    category: String,
    status: Boolean,
    createdAt: Date,
})

export const ListModel = mongoose.model('List', {
    name: String,
    description: String,
    idUser: String
})

export const UserModel = mongoose.model('User', {
    name: String,
    email: String,
    password: String
})
