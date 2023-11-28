import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: ""
  });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); //syntethic event
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //to convert js object to json string as in a http request json is a common format 
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    // console.log(response);     //on website
    //this json response is what we sent through createuser.js file on success insertion of data in db
    const json = await response.json();
    console.log(json);

    if (!json.success){
      if(json.errors==="User not found")alert("user not found");
      else alert("Try Logging with corretct password");
    } 
    else {
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
   <>
   <Navbar></Navbar>
    <div className="container">
        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
        
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user.
          </Link>
        </form>
      </div>
<Footer></Footer>
   </>
  )
}
