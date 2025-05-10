import { ObjectId } from 'mongodb'
import prisma from '../prisma/client.js'

export const getAllCategories = () => prisma.category.findMany()

export const createCategory = (data) => prisma.category.create({ data })

export const getCategoryById = (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid ObjectId format for Category ID')
  }
  return prisma.category.findUnique({ where: { id } })
}

export const getCategoryByName = (name) => {
  return prisma.category.findUnique({ where: { name } })
}


export const deleteCategory = (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid ObjectId format for Category ID')
  }
  return prisma.category.delete({ where: { id } })
}

export const updateCategory = (id, data) => {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid ObjectId format for Category ID')
  }
  return prisma.category.update({ where: { id }, data })
}
