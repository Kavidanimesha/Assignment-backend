const asyncHandler = require('express-async-handler')
const ProductSchema = require('../models/productModel')
const multer = require('multer');
const path = require('path');

//GET All API

const getAllProducts =asyncHandler( async (req, res) => {
  const products = await ProductSchema.find()

  res.json(products)
  });
  

   // POST API

   const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    }
  }).array('images', 10);
  
  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
  
  
  const createProduct = asyncHandler(async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
  
      const { sku, name, price, qty, description } = req.body;
  
      if (!sku || !name || !price || !qty || !description) {
        return res.status(400).json({ message: "Please check the input fields" });
      }
  
      const images = req.files.map(file => ({
        filename: file.filename,
        path: file.path,
        isMain: false
      }));
  
      const createdProduct = await ProductSchema.create({
        sku,
        name,
        price,
        qty,
        description,
        images
      });
  
      res.status(201).json(createdProduct);
    });
  });
  
  
  //UPDATE API
  
  const updateProduct =asyncHandler( async (req, res) => {
    const product = await ProductSchema.findById(req.params.id)

    if(!product) {
      res.status(400)
      throw new Error("Product not found")
    }

    const updatedProduct = await ProductSchema.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
    }) 
    res.json(updatedProduct);
  });

  module.exports = {
    getAllProducts,
    createProduct,
    updateProduct
  };