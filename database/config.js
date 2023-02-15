import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

/**
 * Connect to mongoose
 * @returns
 */
export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('Conexión de base de datos establecida')
  } catch (error) {
    console.error(error.message)
  }
}
