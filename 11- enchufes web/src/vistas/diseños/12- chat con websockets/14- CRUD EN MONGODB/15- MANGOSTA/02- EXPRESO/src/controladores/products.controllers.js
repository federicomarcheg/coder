import ProductManager from "../managers/product.manager.js";
const productManager = new ProductManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productManager.getAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productManager.getById(id);
    if(!product) res.json({msg: 'Product not found'});
    else res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProd = await productManager.create(req.body);
    if(!newProd) res.json({msg: 'Error creating product'});
    else res.json(newProd);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await productManager.update(id, req.body);
    if(!prodUpd) res.json({msg: 'Error update product'});
    else res.json(prodUpd);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await productManager.delete(id);
    if(!prodDel) res.json({msg: 'Error delete product'});
    else res.json(prodDel);
  } catch (error) {
    next(error);
  }
};