const categoryModel  = require("../models/categories");
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

describe('Category schema test', ()=>{
    it ('Add category', ()=>{
        const category={
            'cName':"flute",
            'cDescription':"traditionalinstrument",
            'cStatus':"Active"
            
        };

        return categoryModel.create(category)
        .then((cat_ret)=>{
            expect(cat_ret.cName).toEqual("flute");
        })
        

        
    });
    it('to test the update', async()=>{
        return categoryModel.findOneAndUpdate({_id: Object('62e03967dbd32f3791b8bfd5')},
        
        {$set:{cName:'Recording'}})
        .then((ct)=>{
            expect(ct.cName).toEqual('Recording')
        })
    })
    it('to test the delete user is working or not', async () => {
        const status = await categoryModel.deleteOne({_id :Object('62dc02b80d035913d03b01fa')});
        expect(status.ok);
       });
    



    

})