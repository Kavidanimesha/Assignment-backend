const express = require ('express')
const router  = express.Router()
const {getAllProducts,createProduct,updateProduct,Deleteproduct} = require('../controllers/productController')

router.get('/',getAllProducts )

router.post('/', createProduct)

router.put('/:id',updateProduct)

// router.delete('/:id',Deleteproduct)

module.exports = router