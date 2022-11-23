import React from "react";
import "./reg.css"


export default function Registion() {
  return (
    <div class="container">
    <center>
      <div class="title">Registration page</div>
    </center>
    <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <h3 className="details">First Name</h3>
              <input type="text" placeholder="Enter your firstname" required/>
        </div>
        <div className="input-box">
          <h3 className="details">Last Name</h3>
            
              <input type="text" placeholder="Enter your lastname" required/>
        </div>
        <div className="input-box">
          <h3 className="details">Email</h3>
            
              <input type="text" placeholder="Enter your email" required/>
        </div>
        <div className="input-box">
          <h3 className="details">Phone Number</h3>
            
              <input type="text" placeholder="xxxxx xxxxx" required/>
        </div>

        <div>
          <label for="gender"><b> Select you gender</b></label>
          <div className="select">
            <select name="format" id="format">
              <option selected disabled>Choose Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>



        <div className="input-box">
          <h3 className="details">Password
            </h3>
              <input type="text" placeholder="Enter your password" required/>
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
</div>
  )
}
