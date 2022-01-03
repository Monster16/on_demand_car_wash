import React, { Component } from 'react'

export class Admin_Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      aEmail: "",
      aPassword: ""
    };
    
    this.handleChange = this.handleChange.bind();
    this.login = this.login.bind();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login = () => {
    let valid_data = true;


    if (this.state.aEmail === "") {
      this.state.aEmail_error = "Required!";
      valid_data = false;
    }

    if (this.state.aPassword === "") {
      this.state.aPassword_error = "Required!";
      valid_data = false;
    }
    this.setState({
      update: true
    });
    if (valid_data) {
      //login
    }
  };
  
  render() {
    return (
      <div>
        <section className="vh-101 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2
                        className="fw-bold mb-2 text-uppercase"
                        style={{ color: "white" }}
                      >
                        Admin Login
                      </h2>
                      <p className="text-white-50 mb-5" >
                        Please enter your Email and password!
                      </p>

                      <div className="form-outline form-white mb-4- errorMsg" >
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Email"
                       
                          onChange={this.handleChange}

                        />
                       
                        <label className="form-label" htmlFor="typeEmailX"></label>
                      </div>

                      <div className="form-outline form-white mb-4 errorMsg" >
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Pasword"
                         
                          onChange={this.handleChange}
                        />
                        
                        <label className="form-label" htmlFor="typePasswordX"></label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={this.login}
                      >
                        Login
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Admin_Login

