import { Router } from 'express'
import { addProductToCart } from '../controllers/cart.controller.js'
import { crudValidator } from '../middlewares/crud-validator.middleware.js'
import { check } from 'express-validator'

export const cartRouter = Router()

cartRouter.post(
  '/',
  [
    check('id', 'ID Inválido').isMongoId(),
    check('colorCode', 'Código de color no registrado').isNumeric(),
    check('storageCode', 'Código de almacén no válido').isNumeric(),
    crudValidator
  ],
  addProductToCart
)
