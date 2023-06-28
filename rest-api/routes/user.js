const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin} =require('../middlewares/verifyToken')
const CRYPTOJS =require('crypto-js')
const router=require('express').Router();
const User =require('../models/User')

//update

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password=CRYPTOJS.AES.encrypt(req.body.passwoord,process.env.CRYPTO_SECRET).toString()
    }

    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }

})

//delete

router.delete('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

//getUser

router.get('/find/:id',verifyTokenAndAdmin,async(req,res)=>{
   try {
    const user = await User.findById(req.params.id)
    const {password,...others}=user._doc;
   if(user){
    res.status(200).json(others)
   }else{
    res.status(404).json('user not found')
   }
   } catch (err) {
    res.status(500).json(err)
   }
})

//getallUsers

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    const query=req.query.new
    try {
        const users =query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(err)
    }
})

//get User stats

router.get('/stats',verifyTokenAndAdmin,async(req,res)=>{
    const date=new Date();
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
    try {
            const data =await User.aggregate([
                {
                    $match:{
                        createdAt:{$gte:lastYear}
                    }
                },
                {
                    $project:{
                        month:{$month:"$createdAt"}
                    }
                },{
                    $group:{
                        _id:"$month",
                        total:{$sum:1}

                    }
                }
            ])
            res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
        
    }
})

module.exports=router