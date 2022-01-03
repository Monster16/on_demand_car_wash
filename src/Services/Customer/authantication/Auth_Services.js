import axios from "axios";


const AUTH_URL = "http://localhost:8080/customer/auth";
const AUTH1_URL = "http://localhost:8080/customer/addcustomer";

class Auth_Services  {
    constructor() {
        this.authenticated = false;
      }
      login(cEmail, cPassword) {
        return axios
          .post(AUTH_URL + "login", { cEmail, cPassword })
          .then((response) => {
            if (response.data.token) {
              console.log(response.data.userId);
              this.authenticated = true;
              localStorage.setItem("customer", JSON.stringify(response.data));
            }
    
            return response.data;
          })
          .catch((err) => {
            console.log("Login Error: " + err);
            return err;
          });
      }
    
      logout() {
        this.authenticated = false;
        localStorage.removeItem("customer");
        console.log("Inside Logout Method");
      }
    
      register( cId,cName,cPhone,cEmail,cAddress,cPassword) {
        return axios.post(AUTH1_URL + "register", {
            cId,
            cName,
            cPhone,
            cEmail,
            cAddress,
            cPassword
        });
      }
    
      isAuthenticated() {
        return this.authenticated;
      }
      getCurrentCustomer() {
        return JSON.parse(localStorage.getItem("customer"));
      }
    }

export default new Auth_Services();
