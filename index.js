import express from 'express';
import cors from 'cors';
import bookingRouter from  './Routers/bookingroom.router.js';


const app =express();
const PORT = 4000;
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
 res.status(200).send(`<div styele="text-align:center">
 
 <h1>Hall booking api's</h1>
 
 </div>`);
 
});

app. use('/bookingapi', bookingRouter)




// app.get('/' , (req,res) =>{
//     res.status(200) .send("api is working")
// })








app.listen(PORT, () =>{
    console.log("App is running in port", PORT);
})