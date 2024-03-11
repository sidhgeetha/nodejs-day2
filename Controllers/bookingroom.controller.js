const roombookings = [
  {
    id: 1,
    room_name: "a1",
    room_status: "available",
    amenities: "ac, washing machine",
    seats: "5",
    price_per_hour: 1500,
  },
  {
    id: 2,
    room_name: "b1",
    room_status: "available",
    amenities: "ac, washing machine,fan",
    seats: "5",
    price_per_hour: 1500,
  },
  {
    id: 3,
    room_name: "a2",
    room_status: "available",
    amenities: "ac, washing machine",
    seats: "5",
    price_per_hour: 1000,
  },
  {
    id: 4,
    room_name: "a3",
    room_status: "available",
    amenities: "ac, washing machine,fan",
    seats: "5",
    price_per_hour: 800,
  },
  {
    id: 5,
    room_name: "b2",
    room_status: "available",
    amenities: "ac, washing machine",
    seats: "5",
    price_per_hour: 1000,
  },
];

let bookingRoom =[];

//create room
export const createRoom = (req,res) => {

  const { room_name, room_status, amenities, seats, price_per_hour } = req.body;



  const newRoom = {
    id: roombookings.length + 1,
    room_name: room_name,
    room_status: room_status,
    amenities: amenities,
    seats: seats,
    price_per_hour: price_per_hour,
  };

  roombookings.push(newRoom)

  res.status(200).json({ message: "new room booked", data: newRoom });
}


//list rooms
export const listRooms =(req,res) =>{

  res.status(200).json({message:"allroom-details", roombookings})

}
export default listRooms;

// rooms api
export const getBookingInfo  = (req,res) =>{
  console.log(req);

    res.status(200).json ({data:roombookings})

}

//Bookig room

  export const bookRoom = (req,res) =>{
    let{ customer_name, date, start_time, end_time, roomID } = req.body;

    // let room =roombookings.find(roomID);

     let room = roombookings.filter((e)=>e.room_status === "available" && e.room_id == roomID);
  
     if ((!room)) {
       return res.status(400).json({ error: "Room is not available" });
     }


     else{
      let  bookingsOnDate = bookingRoom.filter(
          (room) => room.booking_date === date
        );
         if (bookingsOnDate.length > 0) {
           return res.status(400).json({ message: "Date not available" })
         }
         else{

            const booking = {
              customer_name,
              start_time,
              end_time,
              roomID,
              date: date,
              booking_id: bookingRoom.length + 1,
              booking_date: date,
              status: "booked",
            };

         bookingRoom.push(booking);

         return res
           .status(200)
           .json({ message: "room booked", bookingRoom: bookingRoom });

         }

     }
    };

 export const customersDetails = async (req, res) => {
   try {
     const customerList = bookingRoom.map((booking) => {
       const room = roombookings.find((r) => r.room_id === booking.roomID);
       return {
         customer_name: booking.customer_name,
         room_name: room ? room.room_name : null,
         date: booking.date,
         start_time: booking.start_time,
         end_time: booking.end_time,
       };
     });
     res.status(200).json({ data: customerList });
   } catch (error) {
     console.error("Error fetching customer details:", error);
     res.status(500).json({ error: "Internal server error" });
   }
 };

// export const customerBookingDetails = async (req, res) => {
//   try {
//     const bookingDetails = bookingRoom.map((booking) => {
//       const room = roombookings.find((r) => r.room_id === booking.roomID);
//       return {
//         customer_name: booking.customer_name,
//         room_name: room ? room.room_name : null,
//         date: booking.date,
//         start_time: booking.start_time,
//         end_time: booking.end_time,
//         booking_id: booking.booking_id,
//         booking_date: booking.booking_date,
//         booking_status: booking.status,
//       };
//     });
//     res.status(200).json({ data: bookingDetails });
//   } catch (error) {
//     console.error("Error fetching customer booking details:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const customerBookingDetails = (req,res) =>{
  try{
    const {customer_name}=req.params;
    const customerBooking = bookingRoom.filter((e)=>{
      return e.customer_name === customer_name;
    })
    res.status(200).json({
      customer_name,
      booking_count: bookingRoom.length,
      bookings:bookingRoom
    })
  }
  catch (error) {
    console.error("Error fetching customer booking details:", error);
    res.status(500).json({ error: "Internal server error" });
  }


}





    
    
    
   
      
      
      
   

     
  


 