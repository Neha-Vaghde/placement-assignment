import React from 'react'
import {Link} from 'react-router-dom'

export default function Pagination(){
  return(
    <>
    <Link to='/userdetails1'>1</Link>
    <Link to='/userdetails2'>2</Link>
    <Link to='/userdetails3'>3</Link>
    <Link to='/userdetails4'>4</Link>

    </>
  )
}