const mongoose = require('mongoose');
const db = async() => {
  try{
// connection string
const con = await mongoose.connect('mongodb://localhost:27017/mydb',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  console.log(`mongodb connected:${con.connection.host}`)

  }catch(err){
    console.log(err)
  }}


module.exports = db































