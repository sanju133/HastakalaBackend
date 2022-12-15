const mongoose= require('mongoose');
const userModel = require("../models/users");


const url= 'mongodb://localhost:27017/ecommerce';
beforeAll(async()=>{
    await mongoose.connect(url, {
        useNewUrlParser: true,
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
})

describe('user schema test', ()=>{

    it('Add user ',()=>{
        const client={
            'name':"Ruby Rai",
            'email':"ruby12@gmail.com",
            'password':"Cookies13@@",
            'userRole':'1'
            
        };
        return userModel.create(client)
        .then((cli_ret)=>{
            expect(cli_ret.email).toEqual("ruby12@gmail.com");
        });
    })

  

})