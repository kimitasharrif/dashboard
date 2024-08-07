import React, { useEffect, useState } from "react";
import "./labtests.css";
import Layout from "../layout/Layout";
import CheckSession from "../../helpers/CheckSession";
import axiosInstanceToken from "../../helpers/axiosInstanceToken";

const LabTests = () => {
// check if user is logged in
      const { lab_name,  access_token } = CheckSession();

      const lab_id = localStorage.getItem("lab_id")
      const [loading, setLoading] = useState(false);
      const [labtests, setLabTests] = useState([]);
      const [failure, setFailure] = useState(null);

      //filter data
      const [filterdata, setFilterData] = useState([])

      //searchh query
      const [query, setQuery] = useState('')

      //function to handle live search
      const handleSearch =(value)=>{
        // the value is the text that yyou are typing 
        setQuery(value)
        // check if lab test are not empty 
        const filterResult = labtests && labtests.filter((item)=> item.test_name.toLowerCase().includes(value.toLowerCase()))
        // update set Filtered data with teh filterd items 
        setFilterData(filterResult)
      }

useEffect(() => {
    setLoading(true);
    axiosInstanceToken
    .post("/viewlabtests", {
    lab_id: lab_id,
})
    .then((response) => {
    // console.log(response.data)
    setLabTests(response.data);
    setFilterData(response.data);
    // console.log(labtests)
    setLoading(false);
})
    .catch((error) => {
    setLoading(false);
    setFailure(error.message);
});
}, [lab_id]);
if (loading) {
    return <p>Loading...... please wait.</p>;
  }
  // console.log(labtests)

return (
<div >
<Layout />

 <div className="card-container">
   {loading && <p className="text-warning">Loading ... </p>}
        {failure && <p className="text-danger">Error occurred. Try later.</p>}
        <input type="text" placeholder="Search lab tests" className="form-control mb-0" value={query} onChange={(e)=>handleSearch(e.target.value)}/>
        {labtests?.length > 0 ? (
      <table className="table table-striped bg-light p-5 m-1">
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {filterdata?.map((test, index) => (
            <tr className="mt-5" key={index}>
              <td>{test.test_name}</td>
              <td>{test.test_description}</td>
              <td>{test.test_cost}</td>
              <td>{test.test_discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ):
        (<p className="text-info" >No Tests found</p>)
    }
    </div>
</div>
);
};

export default LabTests;
