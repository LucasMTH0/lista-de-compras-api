import {Router} from "express";
import {UserController} from "../controllers/User";
import {Request, Response} from "express";
const userController: UserController = new UserController();
const userRoutes = Router()

userRoutes.post('/register', (request: Request, response: Response) => userController.create(request, response))
userRoutes.post('/login', (request: Request, response: Response)=> userController.login(request, response) )

export default userRoutes;