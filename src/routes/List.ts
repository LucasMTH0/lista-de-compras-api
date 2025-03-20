import {Router} from "express";
import {List} from "../controllers/List";

const listRoutes = Router()

const ListController = new List();

listRoutes.post('/', ListController.create);
listRoutes.get('/', ListController.list)
listRoutes.get('/list/:idList', ListController.get)
listRoutes.put('/list/:idList', ListController.update)
listRoutes.delete('/list/:idList', ListController.delete)


export default  listRoutes;