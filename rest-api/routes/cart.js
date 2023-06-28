const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');
const Cart =require('../models/Cart')

const router=require('express').Router();

//create

router.post('/',verifyToken,async(req,res)=>{
    const newCart =new Cart(req.body)
    
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//update

router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.paramsms.id,
            {
                $set:req.body
            },{new:true})

            res.status(200).json(updatedCart)
    } catch (error) {
        
    }
})

//delete
router.delete('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json('Cart Deleted')
    } catch (error) {

        res.status(500).json(error)
        
    }
})

//getUserCart

router.get('/find/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const cart = await Cart.findOne({userId:req.params.id})
        res.status(200).json(cart)
    } catch (error) {
        
    }
})

//getAll
router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router