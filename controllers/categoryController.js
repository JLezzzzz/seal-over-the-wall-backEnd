import * as service from '../services/categoryService.js';

export const getCategories = async (req, res) => {
  try {
    const data = await service.getAllCategories();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const data = await service.createCategory(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const data = await service.getCategoryById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  
  try {
    await service.deleteCategory(req.params.id);
    res.status(200).json({ message: 'Category deleted successfully' });  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const data = await service.updateCategory(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(data, { message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const data = await service.getProductsByCategory(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products by category', error: error.message });
  }
};
