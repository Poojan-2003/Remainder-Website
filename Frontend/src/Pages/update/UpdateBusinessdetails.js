import React from 'react'
import  { useState } from 'react'
import axios from 'axios'
import {  useNavigate ,useParams} from 'react-router-dom';
import "./update.css"


function UpdateBusinessdetails() {

    const [name , setname] = useState('')
    const [phone , setphone] = useState('')
    const [address , setaddress] = useState()
    const {id} =useParams();
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:8081/updatebusiness/"+id,{name,phone,address})
        .then(res => {
            console.log(res)
            navigate('/ServiceDetails')
        }).catch(err => console.log(err))
    }

    


  return (
    <div className='udashboard'>
        <form onSubmit={handleSubmit}>
            <div className='ui'>Update Users Information</div>
            <div className='useru'>
                <label >Name<span className='upcolu'>: </span></label>
                <input type='text' placeholder='Update Your Name' className='uiuser' 
                onChange={e => setname(e.target.value)}></input>
            </div>

            <div className='useru'>
                <label>Contact<span className='upcole'>: </span></label>
                <input type='number' placeholder='Update Your Contact No.' className='uiemail' 
                onChange={e => setphone(e.target.value)}></input>
            </div>

            <div className='useru'>
                <label >Address<span className='upcold'> : </span></label>
                <input type='text' className='uidate' placeholder='Update your address'
                onChange={e => setaddress(e.target.value)} required></input>
            </div>

            <div><button className='ubtn' >Update Details</button></div>
        </form>
    </div>
  )
}

export default UpdateBusinessdetails