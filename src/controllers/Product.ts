import { Response, Request } from 'express';
import {ProductModel} from "../models/mongoose";

export class ProductController {
    async create(request: Request, response: Response){
        try {
            const { name, url, image, price, userId, listId,priority,category,status,createdAt } = request.body;
            const newProduct = new ProductModel({
                name: name,
                url: url,
                image: image,
                price: price,
                userId: userId,
                listId: listId,
                priority: priority,
                category: category,
                status: status,
                createdAt: createdAt
            })
            await newProduct.save();
            response.status(201).json({message: "Produto criado com sucesso."});
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }
    async list(request: Request | any, response: Response){
        try {
            const userId: any = request.user.userId;
            console.log(userId)
        //     const products = await ProductModel.find({ userId: { $eq :idUser }})
        //     console.log(products)
        //     response.status(200).json(products);
            const products = await ProductModel.find().populate('userId', userId);
            response.status(200).json(products);
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }
    async get(request: Request, response: Response){
        try {
            const { id } = request.params;
            const product = await ProductModel.findById(id);
            if(product){
                response.status(200).json(product);
            } else {
                response.status(404).json({message: 'Produto não encontrado'});
            }
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }
    async update(request: Request, response: Response){
        try {
            const { id } = request.params;
            const productUpdated = request.body;
            const product = await ProductModel.findByIdAndUpdate(id, productUpdated);
            await product.save();
            response.status(200).json({message: "Produto alterado com sucesso."});
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }
    async delete(request: Request, response: Response){
        try {
            const { id } = request.params;
            const product = await ProductModel.findByIdAndDelete(id);
            response.status(200).json({message: 'Produto deletado'});
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }
}




export async function createProduct(request: Request, response: Response) {
    try {

    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function getProducts(request: Request, response: Response) {
    try {

    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function getProduct(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const product = await ProductModel.findById(id);
        if(product){
            response.status(200).send(product);
        } else {
            response.status(404).json({message: 'Produto não encontrado'});
        }
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function updateProduct(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const product = await ProductModel.findByIdAndUpdate(id);
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function deleteProduct(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const product = await ProductModel.findByIdAndDelete(id);
        response.status(200).json({message: 'Produto deletado'});
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}