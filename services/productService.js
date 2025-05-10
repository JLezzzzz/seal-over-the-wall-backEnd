import prisma from '../prisma/client.js'

export const getAllProducts = () =>
  prisma.product.findMany({
    include: { category: true, variants: true }
  })

export const getProductById = (id) =>
  prisma.product.findUnique({
    where: { id },
    include: { category: true, variants: true }
  })

  export const createProduct = (data) => {
    const {
      variants,
      productType,
      ...productData
    } = data;
  
    return prisma.product.create({
      data: {
        ...productData,
        productType, // ต้องรวมเข้ามา
        category: {
          connectOrCreate: {
            where: { name: productType },
            create: { name: productType },
          },
        },
        variants: {
          create: variants,
        },
      },
      include: {
        category: true,
        variants: true,
      },
    });
  };
  
  export const updateProduct = (id, data) =>
    prisma.product.update({
      where: { id },
      data,
      include: { category: true, variants: true },
    });

export const deleteProduct = async (id) => {
  // ลบ variants ก่อน
  await prisma.variant.deleteMany({
    where: { productId: id },
  });

  // แล้วลบ product
  return prisma.product.delete({
    where: { id },
  });
};
export const getProductsByCategory = (id) =>
  prisma.product.findMany({ where: { categoryId: id } })