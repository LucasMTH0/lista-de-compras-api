import {Router} from "express";
import {createProduct, getProduct, getProducts} from "../controllers/Product";

const productRoutes = Router()

productRoutes.post('/', createProduct)
productRoutes.get('/', getProducts)
productRoutes.get('/:id', getProduct)
productRoutes.delete('/:id')


export default  productRoutes;