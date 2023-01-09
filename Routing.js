import React from 'react'
import {Routes , Route} from 'react-router-dom'
import App from './App'
import UserDetails from './UserDetails'
import UserDetails1 from './UserDetails1'
import UserDetails2 from './UserDetails2'
import UserDetails3 from './UserDetails3'
import UserDetails4 from './UserDetails4'
export default function Routing(){
  return(
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/userdetails' element={<UserDetails/>}/>
      <Route path='/userdetails1' element={<UserDetails1/>}/>
      <Route path='/userdetails2' element={<UserDetails2/>}/>
      <Route path='/userdetails3' element={<UserDetails3/>}/>
      <Route path='/userdetails4' element={<UserDetails4/>}/>
    </Routes>

  )
}