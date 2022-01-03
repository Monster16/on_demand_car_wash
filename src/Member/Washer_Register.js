import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export class Washer_Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
        
        wName: '',
         wEmail:'',
         wPhone:'',
         wAddress:'',
         wPassword:'',
     
         
         wNameError:'',
         wPhoneError:'',
         wPasswordError:'',
         isProfile: false
    }
    this.register=this.register.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.wName.length<4 && this.state.wPassword.length<6 && this.state.wPhone.length<10 ) {
        this.setState({
          wNameError:"Name cannot be less than 3 word",
          wPasswordError:"Password should be more than 6", 
            wPhoneError:"Invalid Mobile Number"

        })
    }
    else if(this.state.wName.length<4){
        this.setState({
          wNameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.wPassword.length<6){
        this.setState({
          wPasswordError:"Password should be more than 6"
        })
    }
    else if(this.state.wPhone.length<10){
        this.setState({
          wPhoneError:"Invalid Mobile Number"
        })
    }
    else{
        return true
    }
}
register(e){
    this.setState({
      wNameError:"",
        wPasswordError:"",
        wPhoneError:""

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8003/washer/addwasher",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                wId: this.state.wId,
                wName:this.state.wName,
                wPhone: this.state.wPhone,
                wEmail: this.state.wEmail,
                wAddress: this.state.wAddress,
                wPassword: this.state.wPassword
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("You have been Registered Successfully")
            
        })
        
        .catch(err=>{
            alert("Your Registration Failed..!!!!")
        })
        
    }
}
handleChange(changeObject){
    this.setState(changeObject)
}
  render() {
    return (
      <section className="vh-120">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" >
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Washer Sign up
                    </p>

                    <form className="mx-1 mx-md-2">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                           onChange={(e)=>this.handleChange({
                            cId: e.target.value
                           })}
                            type="number"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your ID"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                         
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              cName: e.target.value
                             })}
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                          <label className="form-label" for="form3Example1c" ></label>
                          <p style={{color:'red'}}>{this.state.cNameError}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              cPhone: e.target.value
                             })}
                            type="tel"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                          <p style={{color:'red'}}>{this.state.cPhoneError}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              cEmail: e.target.value
                             })}
                            type="email"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Enter Your Email"
                          />
                          <label className="form-label" for="form3Example1c">
                            
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e)=>this.handleChange({
                              cAddress: e.target.value
                             })}
                            type="text"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Enter Your Address"
                          />
                          <label className="form-label" for="form3Example3c">
                            
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                           onChange={(e)=>this.handleChange({
                            cPassword: e.target.value
                           })}
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Enter Password"
                          />
                          <label className="form-label" for="form3Example4c">
                            
                          </label>
                          <p style={{color:'red'}}>{this.state.cPasswordError}</p>
                        </div>
                      </div>

                     

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg"
                         onClick={(e)=>this.register(e)}>
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/washer_login" className="fw-bold text-body"><u>Login here</u></Link></p>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
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
}

export default Washer_Register
