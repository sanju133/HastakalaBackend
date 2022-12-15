const customizeModel  = require("../models/customize");
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

describe('slide schema test', ()=>{
    it ('Add slide', ()=>{
        const category={
            'slideImage':"hello.jpg",
            'firstShow':"1"
        };

        return customizeModel.create(category)
        .then((cat_ret)=>{
            expect(cat_ret.slideImage).toEqual("hello.jpg");
        })
        

        
    });
    it('to test the update', async()=>{
        return customizeModel.findOneAndUpdate({_id: Object('62dbc9c8f286591e0cdddd1c')},
        
        {$set:{slideImage:'1658571208838_guitar2.jpg'}})
        .then((ct)=>{
            expect(ct.slideImage).toEqual('1658571208838_guitar2.jpg')
        })
    })
    it('to test the delete user is working or not', async () => {
        const status = await customizeModel.deleteOne({_id :Object('62dbc776f286591e0cdddcef')});
        expect(status.ok);
       });
    
       
})