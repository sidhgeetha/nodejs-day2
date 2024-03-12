import express from 'express';
import cors from 'cors';
import bookingRouter from  './Routers/bookingroom.router.js';


const app =express();
const PORT = 4000;
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
 res.status(200).send(`<div style="text-align:center">
 
 <h1>Hall booking api's</h1>
       <h5><a href="https://web.postman.co/workspace/0b740ab5-96dc-4a8f-85b2-10a7807d7fb9/collection/33139018-fcecaddf-775a-4679-9261-5fb62dd2ab42?action=share&source=copy-link&creator=33139018">Postman Collection Link</a></h5>

 </div>`);
 
});

app. use('/bookingapi', bookingRouter)




// app.get('/' , (req,res) =>{
//     res.status(200) .send("api is working")
// })








app.listen(PORT, () =>{
    console.log("App is running in port", PORT);
})