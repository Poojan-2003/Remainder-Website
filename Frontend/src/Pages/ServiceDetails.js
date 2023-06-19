import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import "../App.css"
import  { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function ServiceDetails() {

  const [userdata,setUserdata] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8081/businessinfo')
    .then(res => setUserdata(res.data))
    .catch(err => console.log(err));
},[])

const  handleDelete =  async(id) => {
  try{
      await axios.delete('http://localhost:8081/deletebusiness/'+id)
      window.location.reload()
  }catch(err){
      console.log(err)
  }
}
  return (
    <div className='main'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div>
            <div className='alldata'>
                <div>

                    <table >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Info</th>
                            <th>Address</th>
                            <th>Remarks</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                userdata.map((data,i) =>(
                                    <tr key={i}>
                                        <td>{data.Name}</td>
                                        <td>{data.Phone}</td>
                                       <td>{data.Address}</td> 
                                        <td>{data.Remarks}</td>
                                        
                                        <td><Link to={`UpdateBusinessdetails/${data.ID}`} className='upbtn'>Update</Link></td>
                                       <td><button className='delbtn' onClick={() =>handleDelete(data.ID)}>Delete</button></td> 
                                    </tr>
                                ))
                                
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            
        
      </div>
    </div>
  )
}

export default ServiceDetails