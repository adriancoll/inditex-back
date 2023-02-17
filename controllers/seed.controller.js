import { request, response } from 'express'
import { success } from '../helpers/api-responses.js'
import data from '../data/seed-data.json' assert { type: 'json' }
import { Product, Specification } from '../models/product.entity.js'

export const seedDatabase = async (req = request, res = response) => {
  const { products } = data

  await Product.deleteMany()
  await Specification.deleteMany()

  const specificationsToSave = products.map((product) =>
    new Specification({ ...product.specification }).save()
  )

  const specifications = await Promise.all(specificationsToSave)

  const productsToSave = products.map((product, index) =>
    new Product({
      ...product,
      specification: specifications[index]._id
    }).save()
  )

  await Promise.all(productsToSave)

  return res.json(success('seeded'))
}
