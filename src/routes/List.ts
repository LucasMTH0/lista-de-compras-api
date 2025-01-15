import {Router} from "express";
import {getListById, getLists} from "../controllers/List";

const listRoutes = Router()

listRoutes.get('/', getLists)
listRoutes.get('/:id', getListById)
listRoutes.delete('/:id')


export default  listRoutes;