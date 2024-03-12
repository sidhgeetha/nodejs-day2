import express from 'express';
import cors from 'cors';
import bookingRouter from  './Routers/bookingroom.router.js';


const app =express();
const PORT = 4000;
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  // res.status(200).json({message:"Hi team,welcome to guvi world"})
  res
    .status(200)
    .send(
      `<div style="background-color:yellow;"> <h1>https://github.com/sidhgeetha/nodejs-day2.git</h1> </div>`
      `<div style="background-color:yellow;"> <h1>https://web.postman.co/workspace/0b740ab5-96dc-4a8f-85b2-10a7807d7fb9/request/33139018-e9e4d59b-7f88-46d9-b33a-e440414c2e52</h1> </div>`
    );
});

app. use('/bookingapi', bookingRouter)




// app.get('/' , (req,res) =>{
//     res.status(200) .send("api is working")
// })








app.listen(PORT, () =>{
    console.log("App is running in port", PORT);
})