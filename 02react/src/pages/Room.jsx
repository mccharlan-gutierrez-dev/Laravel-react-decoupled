import React, { useEffect, useState } from 'react'
import { hotels } from '../data/hotels'
import { useParams } from 'react-router';

const Room = () => {
    const [hotel, setHotel] = useState("");

    let {roomId} = useParams();

    const findByRoomId = (roomId) => {
        return hotels.find((hotel) => hotel.id === roomId);
    }

   useEffect(() => {
        const hotel = findByRoomId(parseInt(roomId));
        setHotel(hotel)
        console.log(roomId);
        console.log(hotel);

    },[roomId]
) 
   

  return (
    <div>
       <h1> {`Room ${roomId}`}</h1>
       <p> {`${hotel.name}  `} </p>
       <p> {`${hotel.description}`} </p>
       
    </div>

  )
}

export default Room