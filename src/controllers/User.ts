import {checkUserPasswordToDatabaseEncryptedPassword, generateEncryptPassword} from "../services/bcrypt";
import { Request, Response } from "express";
import {User} from "../models/mongoose";

export async function createUser(request: Request, response: Response) {
    try {
        const { name, email, password }: any = request.body;
        const encryptedPassword = await generateEncryptPassword(password);
        const newUser = new User({ name: name, email: email, password: encryptedPassword})
        await newUser.save();
        response.status(201).json({message: "Usuário criado com sucesso."});
    } catch (error: any) {
        response.status(500).json({message: error.message, error});
    }
}

export async function getUser(request: Request, response: Response) {
    try{
        const { email, password } = request.body;
        console.log("body: ", request.body);
        if(email && password){
            const user = await User.findOne({ email: email });
            if( await checkUserPasswordToDatabaseEncryptedPassword(password, user.password) ){
                const form = {id: user.id, name: user.name, email: user.email}
                response.status(200).send(form);
            }
        } else {
            response.status(404).send({message: "Usuário não encontrado."})
        }

    } catch (error: any) {
        response.status(500).json({message: error.message});
    }
}

