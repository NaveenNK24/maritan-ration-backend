
const express = require('express')
const app = express()
const port = 3000

const addRation = require('./routes/add-ration')
const viewRation = require('./routes/view-ration')

app.use(addRation);
app.use('/view',viewRation);

app.use((res,req,next) => {
  const error = new Error('Couldn\'t found this route' );
  error.code = 404;
  throw error
})

app.use((error,req,res,next) => {
  if(res.headerSent){
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occured'});
})

app.listen(port, () => {
  console.log(`maritan ration ${port}`)
})