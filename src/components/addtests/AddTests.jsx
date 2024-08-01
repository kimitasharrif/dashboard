import React from 'react'
import './addtests.css'
import Layout from '../layout/Layout'

const AddTests = () => {
  return (
    
    <div>
    <Layout/>


    <form onSubmit={submit} className="card shadow p-4">
                        <div className="card-body">
                            {loading && <div className="text-warning"> Please Wait..</div>}
                            {success && <div className="text-success"> {success}</div>}
                            {failure && <div className="text-danger"> {failure}</div>}
                            <input type="text" placeholder="Enter Test Name" value={test_name}
                                onChange={(e) => setName(e.target.value)} required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Desc" value={test_description}
                                onChange={(e) => setDescription(e.target.value)} required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Cost" value={test_cost}
                                onChange={(e) => setCost(e.target.value)} required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Discount" value={test_discount}
                                onChange={(e) => setDiscount(e.target.value)} required
                                className="form-control" /> <br />
                
                                
                            <button className="btn btn-dark">Add Test</button>
                        </div>
                    </form>
    </div>
  )
}

export default AddTests
