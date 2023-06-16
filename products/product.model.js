const products = [
  {
    id: "red shoe",
    description: " Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProduct() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}
function getProductId(id) {
  return products.find((product) => product.id === id);
}
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductId(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.reviews?.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllProduct,
  getProductByPrice,
  getProductId,
  addNewProduct,
  addNewProductReview,
};
