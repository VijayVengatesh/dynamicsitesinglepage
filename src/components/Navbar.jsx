import React, { useState, useRef, useEffect } from "react";
import "../css/Navbar.css";


export const Navbar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const[admin,setAdmin]=useState(true)
  const [phoneNumber, setPhoneNumber] = useState("+9597185295");
  const phoneRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  useEffect(()=>{
    if(isEditing){
        phoneRef.current.focus()
    }
  },[isEditing])
  return (
    <>
      <nav className="container-fluid ps-5 pe-5">
        <div className="row pb-3 pt-1" style={{borderBottom:"1px solid orange"}}>
          <div className="col-8">
            <ul className="list-unstyled d-flex gap-3">
              <li>Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Our Clients</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-4 d-flex gap-2 justify-content-end align-items-center">
            <i className="bi bi-telephone-fill"></i>
            <p>Hotline</p>
            {isEditing ? (
              <input
                type="text"
                value={phoneNumber}
                onChange={handleInputChange}
                className="form-control"
                ref={phoneRef}
                style={{ width: "auto" }}   
              />
            ) : (
              <p>{phoneNumber}</p>
            )}
            {admin&&<button onClick={isEditing ? handleSaveClick : handleEditClick} className="btn btn-primary">
              {isEditing ? "Save" : "Edit"}
            </button>}
          </div>
        </div>
      </nav>
    </>
  );
};
