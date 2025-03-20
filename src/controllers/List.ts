import {ListModel} from "../models/mongoose";
import { Request, Response } from "express";

export class List {
    async create(request: Request, response: Response) {
        try{
            const { name, description, idUser } = request.body;
            const listCreated = new ListModel(name, description, idUser);
            listCreated.save();
            response.status(200).json({ message: "Lista Criada" });
        } catch (error: any) {

        }
    }

    async get(request: Request, response: Response){
        try {
            const { id } = request.params;
            response.status(200).send(await ListModel.findById(id));
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }

    async list(request: Request, response: Response){
        try {
            response.status(200).json(await ListModel.find());
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }

    async update(request: Request, response: Response){
        try{

        } catch (error: any) {

        }
    }

    async delete(request: Request, response: Response){
        try {
            const { id } = request.params;
            const deleteList = await ListModel.findByIdAndDelete(id)
            response.status(200).json({ message: 'Deletado com sucesso'});
        } catch (error: any) {
            response.status(400).json({error: error.message});
        }
    }
}

