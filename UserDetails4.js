import React from 'react'
import {useState} from 'react'
import Pagination from './Pagination'

export default function UserDetails4(){
  const[ restData ,setRestData]=useState([])
 let list = JSON.parse(localStorage.getItem("userList"))
//  console.log(list)
 const newARR = list.filter((x,i)=> i>40 && i <=50)
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