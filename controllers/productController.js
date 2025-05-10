import * as service from '../services/productService.js';

export const getProducts = async (req, res) => {
  try {
    const data = await service.getAllProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const data = await service.getProductById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = await service.createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { variants, ...productData } = req.body;

    const updatedProduct = await service.updateProduct(req.params.id, {
      ...productData,
      variants: variants
        ? {
            deleteMany: {}, // ลบ variant เดิมทั้งหมด
            create: variants, // เพิ่ม variant ใหม่
          }
        : undefined,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      message: 'Error updating product',
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await service.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
    
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};
