const productModel  = require("../models/products");
const mongoose= require('mongoose');

//new database

const url= 'mongodb://localhost:27017/ecommerce';
beforeAll(async()=>{
    await mongoose.connect(url, {
        useNewUrlParser: true,
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
})

describe('product schema test', ()=>{
    it ('Add product', ()=>{
        const category={
            'pName':"flute",
            'pDescription':"traditionalinstrument",
            'pPrice':'10',
            
            'pStatus':"Active"
            
        };

        return productModel.create(category)
        .then((cat_ret)=>{
            expect(cat_ret.pName).toEqual("flute");
        })
        

        
    });
       
})