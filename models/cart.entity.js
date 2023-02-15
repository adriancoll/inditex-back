import { Schema, model } from 'mongoose'

const CartSchema = new Schema({
  count: Number
})

export const Cart = model('Cart', CartSchema)
