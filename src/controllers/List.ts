import {List} from "../models/mongoose";
import { Request, Response } from "express";

export async function getLists(request: Request, response: Response) {
    try {
        response.status(200).json(await List.find());
    } catch (error: any) {
        response.status(400).json({ error: error.message });
    }
}

export async function getListById(request: Request, response: Response) {
    try {
        const { id } = request.params;
        response.status(200).send(await List.findById(id));
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}

export async function createList(request: Request, response: Response) {
    try{
        const { name, description, idUser } = request.body;
        const listCreated = new List(name, description, idUser);
        listCreated.save();
        response.status(200).json({ message: "Lista Criada" });
    } catch (error: any) {

    }
}

export async function updateList(request: Request, response: Response) {
    try{

    } catch (error: any) {

    }
}


export async function deleteList(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const deleteList = await List.findByIdAndDelete(id)
        response.status(200).json({ message: 'Deletado com sucesso'});
    } catch (error: any) {
        response.status(400).json({error: error.message});
    }
}