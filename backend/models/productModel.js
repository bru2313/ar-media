import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type:String, required: true },
    rating: { type:String, required: true },
    comment: { type:String, required: true },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0 
  },
  numRevuiews: {
    type: ,
    required: true,
    default: 0
  },
  price: {
    type: ,
    required: true,
    default:0    
  },
  countInStock: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Product = mongoose.model('User', productSchema)

export default Product