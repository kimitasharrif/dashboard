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

      axiosInstanceToken.post("/view_bookings", {
      lab_id: lab_id
    })
    .then((response) => {
      setLoading(false);
      console.log(response.data);
      setBookings(response?.data);
      setFilterData(response?.data );
      
      
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error);
      setError(error.message)
    })
},[])

// filterdata by searching 
 //filter data
      const [filterdata, setFilterData] = useState([])

      //searchh query
      const [query, setQuery] = useState('')

      //function to handle live search
      const handleSearch =(value)=>{
        // the value is the text that yyou are typing 
        setQuery(value)
        // check if lab test are not empty 
        const filterResult = bookings && bookings.filter((item)=> item.key?.surname.toLowerCase().includes(value.toLowerCase()) || item.where_taken.toLowerCase().includes(value.toLowerCase()) || item.invoice_no.toLowerCase().includes(value.toLowerCase()) )
        // update set Filtered data with teh filterd items 
        setFilterData(filterResult)
      }


  return (
    <div>
    <Layout/>

<div className="card-container">
   {loading && <p className="text-warning">Loading ... </p>}
        {error && <p className="text-danger">Error occurred. Try later.</p>}
        <input type="text" placeholder="Search surname, where_taken, invoice_no" className="form-control mb-0" value={query} onChange={(e)=>handleSearch(e.target.value)}/>
        {filterdata?.length > 0 ? (
      <table className="table table-striped bg-light p-5 m-1">
        <thead>
          <tr>
            <th>Member</th>
            <th>Date</th>
            <th>Time</th>
            <th>Where Taken</th>
            {/* <th>Test Name</th> */}
            <th>Invoice No</th> 

          </tr>
        </thead>
        <tbody>
          {filterdata?.map((booking, index) => (
            <tr className="mt-5" key={index}>
              <td>{booking?.key?.surname}</td>
              <td>{booking.appointment_date}</td>
              <td>{booking.appointment_time}</td>
              <td>{booking.where_taken}</td>
              <td>{booking.invoice_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ):
        (<p className="text-info" >No Tests found</p>)
    }
    </div>
    
    </div>
  )
}

export default MyBooking
