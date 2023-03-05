var express = require('express');
const { Admin } = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:'Iphone 11',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://www.91-img.com/gallery_images_uploads/d/4/d440c2b9e1aa9fd1666739b2e26433e686e4259d.jpg?tr=h-550,w-0,c-at_max'
    },
    {
      name:'One Plus 7T',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-1.jpg'
    },{
      name:'Oppo 10X',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://www.91-img.com/gallery_images_uploads/a/5/a500826ac13c354e0251aa7da087547db4c5ac86.jpeg?tr=h-550,w-0,c-at_max'

    },{
      name:'MI Note 9 Pro',
      category:'Mobile',
      description:'This is a good phone',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThy3aDf5SN66nEh2Vl_H3c3_otdM7X77z437W223Fp&s'

    }
  ]
  res.render('admin/view-products.hbs',{admin:true,products})

});
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  let name = req.body.name;
  console.log(name);
  // console.log(req.files.img)

})

module.exports = router;
