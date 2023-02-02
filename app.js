const express=require('express')
const app=express()
const port=8000
const bodyParser=require('body-parser')
const placesRoutes = require('./routes/places-routes');
const usersRoutes=require('./routes/user-routes')

app.use(bodyParser.json())
app.use('/backend/places', placesRoutes);
app.use('/backend/users', usersRoutes);


app.listen(port,()=>{
    console.log('im seeing this shit')
})