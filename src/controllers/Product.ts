import { Response, Request } from 'express';
import {Product} from "../models/mongoose";
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
        const product = await Product.findById(id);
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
        const product = await Product.findByIdAndUpdate(id);
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function deleteProduct(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const product = await Product.findByIdAndDelete(id);
        response.status(200).json({message: 'Produto deletado'});
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}