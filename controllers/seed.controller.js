import { request, response } from 'express'
import { success } from '../helpers/api-responses.js'
import { Product, Specification } from '../models/product.entity.js'

import { readFileSync } from 'fs';
import path from 'path';

export const seedDatabase = async (req = request, res = response) => {
  const file = path.join(process.cwd(), 'data', 'seed.json');
  const data = readFileSync(file, 'utf8');

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
