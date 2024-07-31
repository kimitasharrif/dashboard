import React from 'react'
import './maincontent.css'
import Layout from '../layout/Layout'


const MainContent = () => {
  return (
    <div>
    <Layout/>


    <section className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow p-4"> Creative
            {/* card body  */}
            <div className="card-body">
              Smart 
            </div>
          

          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4">
            Affordable
            {/* card body  */}
           <div className="card-body">
              Less Pay 
            </div>
          </div>


        </div>
        <div className="col-md-4">
          <div className="card shadow p-4">
            Efficient
            <div className="card-body">
              Flowing
            </div>

          </div>
        </div>
      </div>

    </section>
    </div>
  )
}

export default MainContent
