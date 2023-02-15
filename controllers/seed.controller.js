import { request, response } from 'express'
import { success } from '../helpers/api-responses.js'
import data from '../data/seed-data.json' assert { type: 'json' }
import { Product } from '../models/product.entity.js'

export const seedDatabase = async (req = request, res = response) => {
  const { products } = data

  await Product.deleteMany()
  const productsInserted = await Product.insertMany(products)
  console.log({ productsInserted })

  return res.json(success('seeded'))
}
