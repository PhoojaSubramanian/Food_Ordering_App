import React from 'react'
import AdminNavbar from './AdminNavbar'
import './AdminHome.css';
export default function AdminHome() {
  return (
    <div>
      <AdminNavbar/>
      <div className='admin_home'>
      <br></br>
      <br></br>
      <br></br>
      <center>
      <h1>Welcome to LET'S Foody</h1>
      <br></br>
      <h3>
      "Serving Up Success: Let's Foody Admin, Your Gateway to Flavorful Efficiency!"</h3>
      <br></br>
      <br></br>
      <b><button style={{ border:'none' , height:'50px',width:'200px',borderRadius:'5px',color:'orangered'}}>SEE DASHBOARD</button></b>
</center>
</div>
    </div>
  )
}
