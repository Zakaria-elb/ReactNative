import { Router } from 'express';
import {listProducts,getProductById,updateProduct,deleteProduct,createProduct} from './productsController'

//Products endpoints
const router = Router();

router.get('/',listProducts);
router.delete('/:id', deleteProduct);
router.get('/:id',getProductById);
router.put('//id',updateProduct);
router.post('/',createProduct);

export default router;