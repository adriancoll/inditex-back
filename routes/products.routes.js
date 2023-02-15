import { Router } from 'express'
import { crudValidator } from '../middlewares/crud-validator.middleware.js'

import {
  getProductDetail,
  getProducts
} from '../controllers/products.controller.js'

export const productsRouter = Router()

productsRouter.get('/:id', [crudValidator], getProductDetail)

productsRouter.get('/', [crudValidator], getProducts)
