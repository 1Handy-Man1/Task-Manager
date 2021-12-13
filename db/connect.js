const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://TheHandMaster:Nolooking100%fail@task-manager-practice.atzy4.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'
const connectionString = 'mongodb+srv://TheHandMaster:3h89DcRvSVa0lM49@cluster0.atzy4.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'



const connectDB = (url)=>{
  return mongoose
  .connect(connectionString)
  .then( ()=>{console.log('CONNECTED TO MONGOOSE SUCCESSFUL')} )
  .catch( (err)=>{console.log(err)} )
}

module.exports = connectDB