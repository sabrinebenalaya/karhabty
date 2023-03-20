import React from 'react'
import NavBarHome from '../Components/Home/navBarHome'
import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <div>
    <NavBarHome/>
  <Outlet/>
    </div>
  )
}

export default Home