// import express from 'express'

// const productRoutes = express.Router()
// import {getProducts, getProductById} from '../controllers/productController.js'



// productRoutes.route('/').get(getProducts)

// productRoutes.route('/:id').get(getProductById)


// export default productRoutes

  
import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router