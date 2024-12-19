const mongoose = require('mongoose')

const conn = async () => {
    //connect to the database
    try{
    mongoose.connect(process.env.MONGO_URI)
    mongoose.connection.once('open', ()=> {
        console.log("connected to mongodb");
    })
} catch(error){
    console.log(`MongoDB did not connect: ${error.message}`);
}
}

module.exports = conn;