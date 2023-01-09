import React from "react";
import "./style.css";
import {useState} from 'react'
import {Link} from 'react-router-dom'


export default function App() {
  const[list , setList] = useState([])
async function gettingData(){

  if(fetch=== true){
    alert("Error..some data is already fetch in storage")
  }else{
  console.log("click")
  for(let i = 0; i < 50 ; i++){
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()
  list.push(data.results[0])
  setList(list)
  
  }
}
console.log(list)
localStorage.setItem("userList" , JSON.stringify(list))

}

function deleteData(){
  alert("USER DETAILS WILL BE DELETED")
  localStorage.removeItem('userList');
}

  return (
    <div>
    <button className='btn1'onClick={gettingData}>Fetch user</button>
    <button className='btn2'onClick={deleteData}>delete user</button>
    <Link to='/userdetails'><button className="btn3">UserDetails</button></Link>

    </div>
  );
}