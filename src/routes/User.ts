import {Router} from "express";
import {createUser, getUser} from "../controllers/User";

const userRoutes = Router()

userRoutes.post('/', createUser)
userRoutes.post('/login', getUser)

export default userRoutes;