import {Router} from "express";
import {createProduct, deleteProduct, getProduct, getProducts, ProductController} from "../controllers/Product";
import { authenticate } from "../middleware/authenticate";

const productController = new ProductController();
const productRoutes = Router()

//'/:idUser'
productRoutes.get('/', authenticate, productController.list)
productRoutes.get('/:id', authenticate, productController.get)
productRoutes.delete('/:id', productController.delete)
productRoutes.put('/:id', productController.update)
productRoutes.post('/', productController.create)



export default  productRoutes;