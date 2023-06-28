const router=require('express').Router()
const Razorpay = require('razorpay');

var instance = new Razorpay({ key_id: 'rzp_test_xx2JAGiKHEOBrv', key_secret: 'BgYiaKECLH8shY76nN0foPBw' })

router.post('/createOrder/',(req,res)=>{
    
var options = {
    amount: '3000',
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    res.status(200).json(order)
  });
})


module.exports=router;