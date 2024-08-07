import React, { useEffect, useState } from "react";
import './nurses.css'
import Layout from '../layout/Layout'
import CheckSession from '../../helpers/CheckSession'
import axiosInstanceToken from "../../helpers/axiosInstanceToken"

const Nurses = () => {
  const { lab_name, access_token } = CheckSession();
  const lab_id = localStorage.getItem("lab_id");
  const [nurses, setNurses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //filter data
      const [filterdata, setFilterData] = useState([])

      //searchh query
      const [query, setQuery] = useState('')

      //function to handle live search
      const handleSearch =(value)=>{
        // the value is the text that yyou are typing 
        setQuery(value)
        // check if lab test are not empty 
        const filterResult = nurses && nurses.filter((item)=> item.surname.toLowerCase().includes(value.toLowerCase()) || item.others.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase()) )
        // update set Filtered data with teh filterd items 
        setFilterData(filterResult)
      }

  useEffect(() => {
    axiosInstanceToken.post("/viewnurses", {
      lab_id: lab_id
    })
    .then((response) => {
      console.log(response.data);
      setNurses(response.data);
      setFilterData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
      setLoading(false);
    });
  }, [lab_id]);

  return (
    <div>
      <Layout />
      <div className="card-container">
        {loading && <p className="text-warning">Loading ... </p>}
        {error && <p className="text-danger">Error occurred. Try later.</p>}
        <input type="text" placeholder="Search surname, others, email" className="form-control mb-0" value={query} onChange={(e)=>handleSearch(e.target.value)}/>
        {/* {!loading && nurses && nurses.length === 0 && <p className="text-info">No nurse found</p>} */}
        {nurses?.length > 0 ? (
          <table className="table table-striped bg-light p-5 m-1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Others</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {filterdata?.map((nurse) => (
                <tr className="mt-5" key={nurse.nurse_id}>
                  <td>{nurse.surname}</td>
                  <td>{nurse.others}</td>
                  <td>{nurse.email}</td>
                  <td>{nurse.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ):
        (<p className="text-info" >No nurse found</p>)
        }
      </div>
    </div>
  );
};

export default Nurses;
