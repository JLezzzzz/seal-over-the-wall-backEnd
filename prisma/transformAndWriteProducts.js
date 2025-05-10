
// const fs = require('fs');

import fs from 'fs';

// ข้อมูลสินค้าแบบ MongoDB (ตัวอย่าง array)
const products = [
  {
    "_id": {
      "$oid": "681dd545655b54e321a84658"
    },
    "styleName": "More Espresso",
    "productType": "cup",
    "description": "The art of staying positive. Start with a double shot.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/espresso/espresso-cup-black-front.png",
      "src/assets/images/Products/cup/espresso/espresso-cup-blue-front.png",
      "src/assets/images/Products/cup/espresso/espresso-cup-gray-front.png",
      "src/assets/images/Products/cup/espresso/espresso-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "More Espresso - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd700655b54e321a8465a"
    },
    "styleName": "Fetch This",
    "productType": "shirt",
    "description": "Well, aren't you going to get it?",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/fetch/fetch-shirt-black-front.png",
      "src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png",
      "src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png",
      "src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Fetch This - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd70b655b54e321a8465c"
    },
    "styleName": "Fetch This",
    "productType": "bag",
    "description": "Well, aren't you going to get it?",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/fetch/fetch-bag-black-front.png",
      "src/assets/images/Products/bag/fetch/fetch-bag-blue-front.png",
      "src/assets/images/Products/bag/fetch/fetch-bag-gray-front.png",
      "src/assets/images/Products/bag/fetch/fetch-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Fetch This - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd713655b54e321a8465e"
    },
    "styleName": "Fetch This",
    "productType": "cup",
    "description": "Well, aren't you going to get it?",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/fetch/fetch-cup-black-front.png",
      "src/assets/images/Products/cup/fetch/fetch-cup-blue-front.png",
      "src/assets/images/Products/cup/fetch/fetch-cup-gray-front.png",
      "src/assets/images/Products/cup/fetch/fetch-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Fetch This - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd7a3655b54e321a84660"
    },
    "styleName": "Think Outside The Box",
    "productType": "shirt",
    "description": "Dare to be different.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/think/think-shirt-black-front.png",
      "src/assets/images/Products/shirt/think/think-shirt-blue-front.png",
      "src/assets/images/Products/shirt/think/think-shirt-gray-front.png",
      "src/assets/images/Products/shirt/think/think-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Think Outside The Box - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd7ac655b54e321a84662"
    },
    "styleName": "Think Outside The Box",
    "productType": "bag",
    "description": "Dare to be different.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/think/think-bag-black-front.png",
      "src/assets/images/Products/bag/think/think-bag-blue-front.png",
      "src/assets/images/Products/bag/think/think-bag-gray-front.png",
      "src/assets/images/Products/bag/think/think-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Think Outside The Box - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd7b4655b54e321a84664"
    },
    "styleName": "Think Outside The Box",
    "productType": "cup",
    "description": "Dare to be different.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/think/think-cup-black-front.png",
      "src/assets/images/Products/cup/think/think-cup-blue-front.png",
      "src/assets/images/Products/cup/think/think-cup-gray-front.png",
      "src/assets/images/Products/cup/think/think-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Think Outside The Box - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd84d655b54e321a84666"
    },
    "styleName": "Just Keep Running",
    "productType": "shirt",
    "description": "Stay in motion. Embrace the rhythm of life.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/just/just-shirt-black-front.png",
      "src/assets/images/Products/shirt/just/just-shirt-blue-front.png",
      "src/assets/images/Products/shirt/just/just-shirt-gray-front.png",
      "src/assets/images/Products/shirt/just/just-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Just Keep Running - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd855655b54e321a84668"
    },
    "styleName": "Just Keep Running",
    "productType": "bag",
    "description": "Stay in motion. Embrace the rhythm of life.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/just/just-bag-black-front.png",
      "src/assets/images/Products/bag/just/just-bag-blue-front.png",
      "src/assets/images/Products/bag/just/just-bag-gray-front.png",
      "src/assets/images/Products/bag/just/just-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Just Keep Running - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd85c655b54e321a8466a"
    },
    "styleName": "Just Keep Running",
    "productType": "cup",
    "description": "Stay in motion. Embrace the rhythm of life.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/just/just-cup-black-front.png",
      "src/assets/images/Products/cup/just/just-cup-blue-front.png",
      "src/assets/images/Products/cup/just/just-cup-gray-front.png",
      "src/assets/images/Products/cup/just/just-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Just Keep Running - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd90c655b54e321a8466c"
    },
    "styleName": "Custommike",
    "productType": "shirt",
    "description": "Your style, your way.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/custom/custom-shirt-black-front.png",
      "src/assets/images/Products/shirt/custom/custom-shirt-blue-front.png",
      "src/assets/images/Products/shirt/custom/custom-shirt-gray-front.png",
      "src/assets/images/Products/shirt/custom/custom-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Custommike - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd913655b54e321a8466e"
    },
    "styleName": "Custommike",
    "productType": "bag",
    "description": "Your style, your way.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/custom/custom-bag-black-front.png",
      "src/assets/images/Products/bag/custom/custom-bag-blue-front.png",
      "src/assets/images/Products/bag/custom/custom-bag-gray-front.png",
      "src/assets/images/Products/bag/custom/custom-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Custommike - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd91a655b54e321a84670"
    },
    "styleName": "Custommike",
    "productType": "cup",
    "description": "Your style, your way.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/custom/custom-cup-black-front.png",
      "src/assets/images/Products/cup/custom/custom-cup-blue-front.png",
      "src/assets/images/Products/cup/custom/custom-cup-gray-front.png",
      "src/assets/images/Products/cup/custom/custom-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Custommike - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dd990655b54e321a84672"
    },
    "styleName": "Own Lane",
    "productType": "shirt",
    "description": "Find your rhythm. Embrace your unique journey.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/own/own-shirt-black-front.png",
      "src/assets/images/Products/shirt/own/own-shirt-blue-front.png",
      "src/assets/images/Products/shirt/own/own-shirt-gray-front.png",
      "src/assets/images/Products/shirt/own/own-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Own Lane - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dda72655b54e321a84676"
    },
    "styleName": "Own Lane",
    "productType": "bag",
    "description": "Find your rhythm. Embrace your unique journey.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/own/own-bag-black-front.png",
      "src/assets/images/Products/bag/own/own-bag-blue-front.png",
      "src/assets/images/Products/bag/own/own-bag-gray-front.png",
      "src/assets/images/Products/bag/own/own-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Own Lane - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681dda7a655b54e321a84678"
    },
    "styleName": "Own Lane",
    "productType": "cup",
    "description": "Find your rhythm. Embrace your unique journey.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/own/own-cup-black-front.png",
      "src/assets/images/Products/cup/own/own-cup-blue-front.png",
      "src/assets/images/Products/cup/own/own-cup-gray-front.png",
      "src/assets/images/Products/cup/own/own-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T09:41:05.833Z"
    },
    "title": "Own Lane - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddbf24718c20ab21d749a"
    },
    "styleName": "Have You Tried Screaming",
    "productType": "shirt",
    "description": " The ultimate stress-relief technique.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/screaming/screaming-shirt-black-front.png",
      "src/assets/images/Products/shirt/screaming/screaming-shirt-blue-front.png",
      "src/assets/images/Products/shirt/screaming/screaming-shirt-gray-front.png",
      "src/assets/images/Products/shirt/screaming/screaming-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:49.376Z"
    },
    "title": "Have You Tried Screaming - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddbfa2daf312664a702cf"
    },
    "styleName": "Have You Tried Screaming",
    "productType": "bag",
    "description": " The ultimate stress-relief technique.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/screaming/screaming-bag-black-front.png",
      "src/assets/images/Products/bag/screaming/screaming-bag-blue-front.png",
      "src/assets/images/Products/bag/screaming/screaming-bag-gray-front.png",
      "src/assets/images/Products/bag/screaming/screaming-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:55.174Z"
    },
    "title": "Have You Tried Screaming - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddc022daf312664a702d1"
    },
    "styleName": "Have You Tried Screaming",
    "productType": "cup",
    "description": " The ultimate stress-relief technique.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/screaming/screaming-cup-black-front.png",
      "src/assets/images/Products/cup/screaming/screaming-cup-blue-front.png",
      "src/assets/images/Products/cup/screaming/screaming-cup-gray-front.png",
      "src/assets/images/Products/cup/screaming/screaming-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:55.174Z"
    },
    "title": "Have You Tried Screaming - cup",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddc652daf312664a702d3"
    },
    "styleName": "Empty",
    "productType": "shirt",
    "description": "Your blank canvas awaits. Make it uniquely yours.",
    "price": 499,
    "sizes": [
      "s",
      "m",
      "l"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/shirt/empty/empty-shirt-black-front.png",
      "src/assets/images/Products/shirt/empty/empty-shirt-blue-front.png",
      "src/assets/images/Products/shirt/empty/empty-shirt-gray-front.png",
      "src/assets/images/Products/shirt/empty/empty-shirt-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:55.174Z"
    },
    "title": "Empty - shirt",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddc6c2daf312664a702d5"
    },
    "styleName": "Empty",
    "productType": "bag",
    "description": "Your blank canvas awaits. Make it uniquely yours.",
    "price": 299,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/bag/empty/empty-bag-black-front.png",
      "src/assets/images/Products/bag/empty/empty-bag-blue-front.png",
      "src/assets/images/Products/bag/empty/empty-bag-gray-front.png",
      "src/assets/images/Products/bag/empty/empty-bag-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:55.174Z"
    },
    "title": "Empty - bag",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "681ddc732daf312664a702d7"
    },
    "styleName": "Empty",
    "productType": "cup",
    "description": "Your blank canvas awaits. Make it uniquely yours.",
    "price": 399,
    "sizes": [
      "one size"
    ],
    "colors": [
      "black",
      "blue",
      "gray",
      "white"
    ],
    "tag": [],
    "images": [
      "src/assets/images/Products/cup/empty/empty-cup-black-front.png",
      "src/assets/images/Products/cup/empty/empty-cup-blue-front.png",
      "src/assets/images/Products/cup/empty/empty-cup-gray-front.png",
      "src/assets/images/Products/cup/empty/empty-cup-white-front.png"
    ],
    "createdOn": {
      "$date": "2025-05-09T10:41:55.174Z"
    },
    "title": "Empty - cup",
    "__v": 0
  }
];

// แมปสีเป็นโค้ดสี
const colorCodes = {
  black: '#000000',
  blue: '#0000FF',
  gray: '#808080',
  white: '#FFFFFF'
};

// ฟังก์ชันแปลงสินค้าเดี่ยว
function transformProduct(product, index) {
  const transformed = {
    productId: index + 1,
    productType: product.productType.charAt(0).toUpperCase() + product.productType.slice(1),
    styleName: product.styleName,
    title: product.title,
    description: product.description,
    reviews: 0,
    reviewCount: 0,
    price: product.price,
    variants: []
  };

  product.colors.forEach((color, colorIndex) => {
    product.sizes.forEach(size => {
      const image = product.images[colorIndex];
      transformed.variants.push({
        size: size.toUpperCase(),
        colorName: color.charAt(0).toUpperCase() + color.slice(1),
        colorCode: colorCodes[color.toLowerCase()] || '#000000',
        shirtImages: [image]
      });
    });
  });

  return transformed;
}

// แปลงทั้ง array
const transformedProducts = products.map((product, index) => transformProduct(product, index));

// เขียนลงไฟล์ JSON
fs.writeFileSync('transformed_products.json', JSON.stringify(transformedProducts, null, 2));

console.log('✅ สร้างไฟล์ transformed_products.json เรียบร้อยแล้ว');
