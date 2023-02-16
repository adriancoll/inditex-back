import { response, request } from 'express'
import { error, success } from '../helpers/api-responses.js'
import { Product } from '../models/product.entity.js'

export const addProductToCart = async (req = request, res = response) => {
  const { body } = req
  const { id, colorCode, storageCode } = body

  const productFound = await Product.findById(id)


  const isValid =
    productFound &&
    productFound?.colors[colorCode] &&
    productFound?.storage[storageCode]

  if (!isValid) return res.json(error('No se ha podido añadir al carrito el producto indicado...'))

  return res.json(success(`${productFound.model}, añadido al carrito.`, { count: 1 }))
}
