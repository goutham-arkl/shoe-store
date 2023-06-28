const router=require('express').Router();
const Product =require('../models/Product')
const {verifyTokenAndAdmin} = require('../middlewares/verifyToken')

//create

router.post('/',verifyTokenAndAdmin,async (req,res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct =await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(error){

        res.status(500).json(error)
    }

})

//update Product

router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true});
        res.status(200).jason(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete

router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json('Product has been removed')
    } catch (error) {
        res.status(500).json(error)        
    }
})

//getProduct

router.get('/find/:id',async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

//getAll Products

router.get('/',async(req,res)=>{
    const qNew =req.query.new
    const qCategory =req.query.category;
    try {
        let products;
            if(qNew){
                products=await Product.find().sort({createdAt:-1}).limit(5)
            }else if(qCategory){
                console.log('jii')
                products=await Product.find({
                    category:{
                        $in:[qCategory],
                    }
                })
            }else{
                products = await Product.find()
            }
    
            res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router