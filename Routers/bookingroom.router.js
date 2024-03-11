import express from 'express';
import {
  listRooms,
  createRoom,
  getBookingInfo,
  bookRoom,
  customersDetails,
  customerBookingDetails,
} from "../Controllers/bookingroom.controller.js";


const  router = express.Router()

// router.get('/example' ,(req,res)=>{
//    res.status(200).send("example")
// })

router.get("/get-bookinginfo", getBookingInfo );
router.post("/create-room",createRoom);
router.get('/list-of-rooms' , listRooms);
router.post("/book-room" , bookRoom);
router.get("/customer-details", customersDetails );
router.get("/customer-count" , customerBookingDetails);









export default router;
