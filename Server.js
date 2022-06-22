
const express = require('express');
require ('dotenv').config ()
const connectDB = require('./Config/connectDB')
const app = express();
const auth = require('./Routes/routes')
const PrivateProduct = require('./Models/Product')
const RegisterSchema = require('./Models/models')
const cors = require ('cors') ;
const bcrypt = require('bcrypt')
initial()
connectDB ()
app.use(cors()) 
app.use (express.json ()) ;
app.use ('/' , auth)



async function  initial  () {
  const userIsAdmin = await RegisterSchema.findOne({role: 'admin'});
  if(!userIsAdmin){
    const user = new RegisterSchema({
      name :'admin' , 
      email :'admin@admin.com',
      password : bcrypt.hashSync(process.env.ADMIN_PASSWORD , 10),
      role : 'admin',
    })
    
  user.save();
  }
  PrivateProduct.estimatedDocumentCount((err,count) => {
      if (!err && count === 0) {
        const productList = 
          [{
            title: "dar sabri",
            description: "furnished apartment living room with 3 bedrooms (2 children's bedrooms and a couple bedroom), 2 bathrooms, well-equipped kitchen with a sea view terrace ",
            rating: 4 ,
            price : "159,00€" , 
            duration : "full day option" ,
            url_images:' https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/286120913_1653091461724468_3542625954577429628_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ujIsWtMhCJkAX8-fvSo&_nc_ht=scontent.ftun15-1.fna&oh=03_AVIgpzmThMYgEDK9qOacA0yW1uuxG6zVGOdyXcO8Ln43pA&oe=62C5FE7B'
          }, 
          {
            title: "dar rim",
            description: "luxury villa with swimming pool of 1000 square meter .4 bedroom with 4 bathrooms and a large kitchen",
            duration: "full day option" ,
            url_images:'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/281847255_5513311692026218_2988983543047821492_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RKAxNQWg_IIAX81ebzy&tn=68t-l5AzDAGjNzDO&_nc_ht=scontent.ftun15-1.fna&oh=00_AT_t6ZSGkjtfcM6COZyuGfKlTs6Ps2orAE7QTT-GQvrUHA&oe=62A57649',
            rating  : 5 ,
            price :"200,00€" ,
          },
          {
            title: "dar selma ",
            description: "well-equipped apartment has 2 bedrooms and 2 bathrooms and a kitchen and a well-secured parking space",
            duration: "full day option" ,
            url_images:'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
            rating  : 3 ,
            price :"139,00€" ,

          }
        ]
        const options = { ordered: true };
        PrivateProduct.insertMany(productList,options);

    };
  });
}

app.listen (process.env.PORT, (err) => {
    err ? console.log (err) : console.log (`the app is running on port : ${process.env.PORT}`)
}) 