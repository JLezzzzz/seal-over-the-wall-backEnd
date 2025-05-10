import prisma from '../prismaClient.js';

async function main() {
  const products = [
    {
      "productId": 1,
      "productType": "Cup",
      "styleName": "More Espresso",
      "title": "More Espresso - cup",
      "description": "The art of staying positive. Start with a double shot.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/espresso/espresso-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/espresso/espresso-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/espresso/espresso-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/espresso/espresso-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 2,
      "productType": "Shirt",
      "styleName": "Fetch This",
      "title": "Fetch This - shirt",
      "description": "Well, aren't you going to get it?",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 3,
      "productType": "Bag",
      "styleName": "Fetch This",
      "title": "Fetch This - bag",
      "description": "Well, aren't you going to get it?",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/fetch/fetch-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/fetch/fetch-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/fetch/fetch-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/fetch/fetch-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 4,
      "productType": "Cup",
      "styleName": "Fetch This",
      "title": "Fetch This - cup",
      "description": "Well, aren't you going to get it?",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/fetch/fetch-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/fetch/fetch-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/fetch/fetch-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/fetch/fetch-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 5,
      "productType": "Shirt",
      "styleName": "Think Outside The Box",
      "title": "Think Outside The Box - shirt",
      "description": "Dare to be different.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/think/think-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 6,
      "productType": "Bag",
      "styleName": "Think Outside The Box",
      "title": "Think Outside The Box - bag",
      "description": "Dare to be different.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/think/think-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/think/think-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/think/think-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/think/think-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 7,
      "productType": "Cup",
      "styleName": "Think Outside The Box",
      "title": "Think Outside The Box - cup",
      "description": "Dare to be different.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/think/think-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/think/think-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/think/think-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/think/think-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 8,
      "productType": "Shirt",
      "styleName": "Just Keep Running",
      "title": "Just Keep Running - shirt",
      "description": "Stay in motion. Embrace the rhythm of life.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/just/just-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 9,
      "productType": "Bag",
      "styleName": "Just Keep Running",
      "title": "Just Keep Running - bag",
      "description": "Stay in motion. Embrace the rhythm of life.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/just/just-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/just/just-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/just/just-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/just/just-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 10,
      "productType": "Cup",
      "styleName": "Just Keep Running",
      "title": "Just Keep Running - cup",
      "description": "Stay in motion. Embrace the rhythm of life.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/just/just-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/just/just-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/just/just-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/just/just-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 11,
      "productType": "Shirt",
      "styleName": "Custommike",
      "title": "Custommike - shirt",
      "description": "Your style, your way.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/custom/custom-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 12,
      "productType": "Bag",
      "styleName": "Custommike",
      "title": "Custommike - bag",
      "description": "Your style, your way.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/custom/custom-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/custom/custom-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/custom/custom-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/custom/custom-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 13,
      "productType": "Cup",
      "styleName": "Custommike",
      "title": "Custommike - cup",
      "description": "Your style, your way.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/custom/custom-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/custom/custom-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/custom/custom-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/custom/custom-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 14,
      "productType": "Shirt",
      "styleName": "Own Lane",
      "title": "Own Lane - shirt",
      "description": "Find your rhythm. Embrace your unique journey.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/own/own-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 15,
      "productType": "Bag",
      "styleName": "Own Lane",
      "title": "Own Lane - bag",
      "description": "Find your rhythm. Embrace your unique journey.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/own/own-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/own/own-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/own/own-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/own/own-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 16,
      "productType": "Cup",
      "styleName": "Own Lane",
      "title": "Own Lane - cup",
      "description": "Find your rhythm. Embrace your unique journey.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/own/own-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/own/own-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/own/own-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/own/own-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 17,
      "productType": "Shirt",
      "styleName": "Have You Tried Screaming",
      "title": "Have You Tried Screaming - shirt",
      "description": " The ultimate stress-relief technique.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/screaming/screaming-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 18,
      "productType": "Bag",
      "styleName": "Have You Tried Screaming",
      "title": "Have You Tried Screaming - bag",
      "description": " The ultimate stress-relief technique.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/screaming/screaming-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/screaming/screaming-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/screaming/screaming-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/screaming/screaming-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 19,
      "productType": "Cup",
      "styleName": "Have You Tried Screaming",
      "title": "Have You Tried Screaming - cup",
      "description": " The ultimate stress-relief technique.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/screaming/screaming-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/screaming/screaming-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/screaming/screaming-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/screaming/screaming-cup-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 20,
      "productType": "Shirt",
      "styleName": "Empty",
      "title": "Empty - shirt",
      "description": "Your blank canvas awaits. Make it uniquely yours.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 499,
      "variants": [
        {
          "size": "S",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-black-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-black-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-black-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-blue-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-blue-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-blue-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-gray-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-gray-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-gray-front.png"
          ]
        },
        {
          "size": "S",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-white-front.png"
          ]
        },
        {
          "size": "M",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-white-front.png"
          ]
        },
        {
          "size": "L",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/shirt/empty/empty-shirt-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 21,
      "productType": "Bag",
      "styleName": "Empty",
      "title": "Empty - bag",
      "description": "Your blank canvas awaits. Make it uniquely yours.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 299,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/bag/empty/empty-bag-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/bag/empty/empty-bag-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/bag/empty/empty-bag-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/bag/empty/empty-bag-white-front.png"
          ]
        }
      ]
    },
    {
      "productId": 22,
      "productType": "Cup",
      "styleName": "Empty",
      "title": "Empty - cup",
      "description": "Your blank canvas awaits. Make it uniquely yours.",
      "reviews": 0,
      "reviewCount": 0,
      "price": 399,
      "variants": [
        {
          "size": "ONE SIZE",
          "colorName": "Black",
          "colorCode": "#000000",
          "shirtImages": [
            "src/assets/images/Products/cup/empty/empty-cup-black-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Blue",
          "colorCode": "#0000FF",
          "shirtImages": [
            "src/assets/images/Products/cup/empty/empty-cup-blue-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "Gray",
          "colorCode": "#808080",
          "shirtImages": [
            "src/assets/images/Products/cup/empty/empty-cup-gray-front.png"
          ]
        },
        {
          "size": "ONE SIZE",
          "colorName": "White",
          "colorCode": "#FFFFFF",
          "shirtImages": [
            "src/assets/images/Products/cup/empty/empty-cup-white-front.png"
          ]
        }
      ]
    },
  ];

  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: {
        productId: product.productId,
        styleName: product.styleName,
        title: product.title,
        description: product.description,
        price: product.price,
        reviews: product.reviews,
        reviewCount: product.reviewCount,
        productType: product.productType, // อย่าลืม! Prisma ต้องการ productType
        category: {
          connectOrCreate: {
            where: { name: product.productType },
            create: { name: product.productType },
          },
        },
      },
    });
  
    // ใช้ create แทน createMany เพราะมี array field
    for (const variant of product.variants) {
      await prisma.variant.create({
        data: {
          ...variant,
          productId: createdProduct.id,
        },
      });
    }
  }
  
  console.log('🟢 Seeded products with variants and categories successfully!');
}

main()
  .catch(e => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
