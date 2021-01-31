// import express from 'express'

// const router = express.Router()

// import { 
//   authUser
// } from '../controllers/userController.js'

// router.post('/login', authUser)

// export default router

  
import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
export default router