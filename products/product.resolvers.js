const productModel = require("./product.model");

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProduct();
    },
    productByPrice: (_, args) => {
      return productModel.getProductByPrice(args.min, args.max);
    },
    product: (_, { id }) => {
      return productModel.getProductId(id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
