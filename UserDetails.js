import React from 'react'
import {useState} from 'react'
// import {Link} from 'react-router-dom'
import Pagination from './Pagination'
import './style.css'

export default function UserDetails(){
   const[ restData ,setRestData]=useState([])
 let list = JSON.parse(localStorage.getItem("userList"))
//  console.log(list)
 const newARR = list.filter((x,i)=>i <=10)
 console.log(newARR)
    


  return(
    <>
   <Pagination/>
    <table border="2px">
    <tr>
    <th>IMAGE</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>PHONE</th>
        <th>COUNTRY</th>
        </tr>
    
     
    {newARR.map((x , i)=><>
      
      
        <tr key={i}>
          <td><img src={x.picture.thumbnail} alt="" /></td>
          <td>{x.name.first} {x.name.last}</td>
          <td>{x.email}</td> 
          <td>{x.gender}</td>
          <td>{x.phone}</td>
          <td>{x.location.country}</td>
        </tr>
        
    
  
    <br/>
    
    </>)}
    </table> 
    </>
  )
}