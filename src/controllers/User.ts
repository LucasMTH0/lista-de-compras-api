import {checkUserPasswordToDatabaseEncryptedPassword, generateEncryptPassword} from "../services/bcrypt";
import {Request, Response} from "express";
import {UserModel} from "../models/mongoose";
import {User} from "../interfaces/User";
import { generateToken } from "../services/token";

export class UserController {

    async getUser(email: string, password: string): Promise<User | null>{
        const user: User = await UserModel.findOne({ email: email });
        if(user && await checkUserPasswordToDatabaseEncryptedPassword(password, user.password) ){
            return {id: user.id, name: user.name, email: user.email} as User;
        }
        return null;
    }

    async create(request: Request, response: Response){
        try {
            const { name, email, password }: User = request.body;
            const encryptedPassword = await generateEncryptPassword(password);
            const newUser = new UserModel({name: name,email: email,password: encryptedPassword})
            await newUser.save();
            response.status(201).json({message: "Usuário criado com sucesso."});
        } catch (error: any) {
            response.status(500).json({message: error.message, error});
        }
    }

    async login(request: Request, response: Response){
        try{
            const { email, password } = <User>request.body;
            const userData: User | null = await this.getUser(email, password);
            if(!userData) {
                response.status(404).json({ message: "Usuário ou senha incorretos."})
            }
            if(userData){
                const token = generateToken(userData.id.toString());
                response.status(200).send({...userData, token: token});
            }
        } catch (error: any) {
            response.status(500).json({message: error.message});
        }
    }


}

