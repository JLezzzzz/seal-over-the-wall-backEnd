import express from 'express'
import * as controller from '../controllers/categoryController.js'

const router = express.Router()

router.get('/', controller.getCategories)
router.get('/:id', controller.getCategory)
router.post('/', controller.createCategory)
router.delete('/:id', controller.deleteCategory)
router.put('/:id', controller.updateCategory)

export default router
