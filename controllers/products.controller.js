import { response, request } from 'express'

export const getProducts = (req = request, res = response) => {
  return res.json(['ProductList'])
}

export const getProductDetail = (req = request, res = response) => {
  return res.json('Product detail')
}
