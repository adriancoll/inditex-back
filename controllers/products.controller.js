import { response, request } from 'express'
import { Product } from '../models/product.entity.js'
import apiResponses from '../helpers/api-responses.js'

export const getProducts = async (_req = request, res = response) => {
  const products = await Product.find()

  return res.json(
    apiResponses.success(`Products fetched: ${products.length}`, products)
  )
}

export const getProductDetail = (req = request, res = response) => {
  return res.json('Product detail')
}
