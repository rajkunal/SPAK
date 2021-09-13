const mongoose = require('mongoose')


const dBConnection = async () =>{
    console.log('connecting to DB...')
    try {
        const connection = await mongoose.connect("mongodb+srv://kunal:kunal14@cluster0.7qmzp.mongodb.net/test",{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true, useFindAndModify:false })
        console.log('Connection state - ',connection.connection.readyState);

        
    } catch (error) {
        console.log("ERROR while connecting DB",error)
    }   
}

module.exports = dBConnection;