import React, { useEffect, useState } from 'react'
import './mybooking.css'
import Layout from '../layout/Layout'
import CheckSession from '../../helpers/CheckSession';
import axiosInstanceToken from "../../helpers/axiosInstanceToken"


const MyBooking = () => {
      const { lab_name, lab_id, access_token } = CheckSession();
      const [bookings, setBookings] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      useEffect(() => {
      setLoading(true);
axiosInstanceToken.post("/view_bookings", {
      lab_id: lab_id
    })
    .then((response) => {
      console.log(response.data);
      // setNurses(response.data);
      setLoading(false);
    })
})


  return (
    <div>
    <Layout/>


    <section className="container">
      <h1>My Booking</h1>
      
    </section>
    </div>
  )
}

export default MyBooking
