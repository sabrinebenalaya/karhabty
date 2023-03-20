import React from "react";
import { Link } from "react-router-dom";

function NavBarAccounts() {
  return (
   
    
    
    <div class="col">
      <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><Link to="/account">Home</Link></li>
        </ol>
        <div style={{float:"right", marginTop:"-25px", color:"red"}}>
        <Link to="/account/orders" >Orders</Link>
        <Link to="/" style={{ marginLeft:"25px", color:"red"}}>Log out</Link>
        </div>
      </nav>
     
  </div>

 
   
   
  );
}

export default NavBarAccounts;
