import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Washer_Login() {
  const [loginData, setLoginData] = useState({ wEmail: "", wPassword: "" });

  let history = useHistory()
  const [loggedIn, setloggedIn] = useState(false);

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function onLogIn() {
    console.log(loginData)
    fetch("http://localhost:8003/washer/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData),
    })
      .then(response => {
        console.log(response)
        if (response.status != 200)
          return (Promise.reject(response.text))
        return (response.json())
      })
      .then(response => {
        alert("You're loggedIn  Successfully")
        setloggedIn(true)
      })
      .catch(err => {
        alert("Invalid Username or password..")
      });


  }
  if (loggedIn) {
    history.push("/washer_home")
  }

  return (
    <section className="vh-101 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Washer Login</h2>
                  <p className="text-white-50 mb-5" >Please enter your Email and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Enter Your Email'
                    name='wEmail'
                    onChange={changeLogInData}/>
                    <label className="form-label" htmlFor="typeEmailX"></label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Enter Your Pasword'
                    name='wPassword'
                    onChange={changeLogInData}/>
                    <label className="form-label" htmlFor="typePasswordX"></label>
                  </div>



                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={onLogIn} >Login</button>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="mb-5 pb-lg-2 text-white">
                      Don't have an account?{" "}
                      <Link to="/washer_register">Register here</Link>
                    </p>
                  </div>


                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Washer_Login
