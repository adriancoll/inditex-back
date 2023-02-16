import { response, request } from 'express'
import { Product } from '../models/product.entity.js'
import apiResponses, { error, success } from '../helpers/api-responses.js'

export const getProducts = async (_req = request, res = response) => {
  const products = await Product.find()

  return res.json(
    apiResponses.success(`Products fetched: ${products.length}`, products)
  )
}

export const getProductDetail = async (req = request, res = response) => {
  const { id } = req.params

  const product = await Product.findById(id)

  if (!product) return res.json(error('Producto no encontrado'))

  return res.json(success('Detalles del producto', { product }))
}
