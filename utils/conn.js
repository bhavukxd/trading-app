const mongoose= require('mongoose')
mongoose.connect(process.env.MONGO_URI)
mongoose.Promise=global.Promise

const db=mongoose.connection
db.on('error',console.error.blind(console,'DB ERROR: '))
module.exports={}