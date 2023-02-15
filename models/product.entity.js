import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  brand: {
    type: String,
    required: [true, 'El nombre es de la marca es obligatorio.']
  },
  model: {
    type: String,
    required: [true, 'El nombre es del model es obligatorio.']
  },
  price: {
    type: String,
    required: [true, 'El precio.']
  },
  cpu: {
    type: String,
    required: [true, 'El nombre del CPU es obligatorio.']
  },
  ram: {
    type: String,
    required: [true, 'La cantidad de RAM es obligatoria.']
  },
  os: {
    type: String,
    required: [true, 'El Sistema operativo es obligatorio.']
  },
  resolution: {
    type: String,
    required: [true, 'La resolución obligatoria.']
  },
  battery: {
    type: String,
    required: [true, 'La capacidad de la batería es obligatoria.']
  },
  dimensions: {
    type: String,
    required: [true, 'Las dimensiones son obligatorias.']
  },
  weight: {
    type: String,
    required: [true, 'El peso es obligatorio.']
  }
})

export const Product = model('Product', ProductSchema)
