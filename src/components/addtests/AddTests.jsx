import React, {useState}from 'react'
import './addtests.css'
import Layout from '../layout/Layout'
import CheckSession from '../../helpers/CheckSession'
import axiosInstanceToken from '../../helpers/axiosInstanceToken'

const AddTests = () => {

   const { lab_name, lab_id, access_token } = CheckSession()

  const [test_name, setName] = useState(null)
        const [test_description, setDescription] = useState(null)
        const [test_cost, setCost] = useState(null)
        const [test_discount, setDiscount] = useState(null)
        const [loading, setLoading] = useState(false)
        const [success, setSuccess] = useState(null)
        const [failure, setFailure] = useState(null)


         const submit = (e) => {
            e.preventDefault();
            //Update Hooks
            setLoading(true)
            setSuccess(null)
            setFailure(null)
            console.log("submitting")
            //Post and Post data using axiosInstance with Token
            axiosInstanceToken.post('/addtests', {
                lab_id: lab_id,
                test_name: test_name,
                test_description: test_description,
                test_cost: test_cost,
                test_discount: test_discount,
                
            })
                .then(function (response) {
                    console.log(response.data);
                    //Update Hooks - Loading and Success
                    setLoading(false)
                    setSuccess(response.data.message)
                    setName(''); setDescription(''); setCost(''); setDiscount(''); //EMpty Hooks
                    //setEmail(''); setName(''); setPassword(''); setPhone(''); setPermit('');
                })
                .catch(function (error) {
                    //Update Loading and Error Hooks
                    console.log(error.message);
                    setLoading(false)
                    setFailure(error.message);
                });

              }
  return (
    
    <div>
    <Layout/>

<div className='form'>
    <form onSubmit={submit}  className="card shadow p-4">
      <h1>AddTests</h1>

                        <div className="card-body">
                            {loading && <div className="text-warning"> Please Wait..</div>}
                            {success && <div className="text-success"> {success}</div>}
                            {failure && <div className="text-danger"> {failure}</div>}
                            <input type="text" placeholder="Enter Test Name" value={test_name}
                            id='test_name'
                                onChange={(e) => setName(e.target.value)} required  
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Desc" value={test_description}
                                onChange={(e) => setDescription(e.target.value)} required   id='test_description'
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Cost" value={test_cost}
                                onChange={(e) => setCost(e.target.value)} required   id='test_cost'
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Discount" value={test_discount}
                                onChange={(e) => setDiscount(e.target.value)} required   id='test_discount'
                                className="form-control" /> <br />

                        
                
                                
                            <button className="btn btn-dark">Add Test</button>
                        </div>
                    </form>
                    </div>
    </div>
  )
}

export default AddTests
