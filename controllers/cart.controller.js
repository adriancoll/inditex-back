import { response, request } from 'express'
import responses from '../helpers/api-responses.js'

export const addProductToCart = (req = request, res = response) => {
  const { body } = req
  // const {} = body

  return res.json(responses.success({ text: 'Update cart', body }))
}
