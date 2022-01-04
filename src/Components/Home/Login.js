import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({ cEmail: "", cPassword: "" });
   
let history=useHistory()
const [loggedIn,setloggedIn]=useState(false);

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function onLogIn() {
    console.log(loginData)
    fetch("http://localhost:8080/customer/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData),
    })
    .then(response=> {console.log(response)
      if(response.status!=200)
      return(Promise.reject(response.text))
      return(response.json())})
    .then(response=>{
        alert("You're loggedIn  Successfully")
        setloggedIn(true)
    })
    .catch(err=>{
        alert("Invalid Username or password..")
    });
    

  }
  if(loggedIn)
  {
    history.push("/Customer_home")
  }
    return (
      <section className="vh-101 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Customer Login</h2>
                    <p className="text-white-50 mb-5" >Please enter your Email and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="cEmail"
                        onChange={changeLogInData}
                        // onChange={changeLogInData}
                      />
                      <label className="form-label" for="typeEmailX"></label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                         name="cPassword"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Password"
                        onChange={changeLogInData}
                      />
                      <label className="form-label" for="typePasswordX"></label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={onLogIn}
                      // onSubmit={this.handleSubmit}
                    >
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="mb-5 pb-lg-2 text-white">
                        Don't have an account?{" "}
                        <Link to="/register">Register here</Link>
                      </p>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Login

{/* 
  function Login(props) {
  const [loginData, setLoginData] = useState({ cEmail: "", cPassword: "" });

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function onLogIn() {
    axios.post("http://localhost:8080/customer/auth")
     
      .then((response) => {
            console.log(response)
            this.props.history.push("/customer_home");
            window.location.reload()
      })
      .catch((err) => {
        alert("Invalid Username or password..!!!!");
      });
  }
  
  
  <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  onChange={changeLogInData}
                />
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  onChange={changeLogInData}
                />
                <label className="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={onLogIn}
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="mb-5 pb-lg-2">
                  Don't have an account?{" "}
                  <Link to="/register">Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> */}