import express from 'express'
import productRoutes from './productRoutes.js'
import categoryRoutes from './categoryRoutes.js'
import uploadRoutes from './uploadRoutes.js';

const router = express.Router()

router.use('/api/products', productRoutes)
router.use('/api/categories', categoryRoutes)
router.use('/api/upload', uploadRoutes);

export default router
