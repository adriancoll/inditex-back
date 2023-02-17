import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  image: {
    type: String,
    required: [true, 'El producto debe tener una imágen.']
  },
  brand: {
    type: String,
    required: [true, 'La marca es obligatorio.']
  },
  model: {
    type: String,
    required: [true, 'El modelo es obligatorio.']
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio.']
  },

  storage: {
    type: [String],
    required: [true, 'Debes introducir capacidades para el dispositivo.']
  },
  colors: {
    type: [String],
    required: [true, 'Debes introducir colores para el dispositivo.']
  },
  slug: {
    type: String,
    unique: true
  },
  specification: {
    type: Schema.Types.ObjectId,
    ref: 'Specification'
  }
})

const SpecificationSchema = new Schema({
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
    type: Number,
    required: [true, 'La capacidad de la batería es obligatoria.']
  },
  dimensions: {
    type: String,
    required: [true, 'Las dimensiones son obligatorias.']
  },
  weight: {
    type: Number,
    required: [true, 'El peso es obligatorio.']
  },
  cameras: {
    type: Number,
    default: 1
  }
})

ProductSchema.pre('save', function (next) {
  const slug = `${this.brand} ${this.model}`.toLowerCase().split(' ').join('-')
  this.slug = slug

  next()
})

export const Specification = model('Specification', SpecificationSchema)
export const Product = model('Product', ProductSchema)
