import axios from "axios";



const API_getallwasher_URL = "http://localhost:8003/washer/";
// const API_addwasher_URL = "http://localhost:8000/admin/";
const API_update_URL = "http://localhost:8000/admin/";
const API_delete_URL = "http://localhost:8000/admin/";


class WasherServices {
  getallwasher() {
    return axios
        .get(API_getallwasher_URL + "allwashers", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        }
      )
      .then((res) => {
        return res.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

    update(id) {
    return axios
      .put(API_update_URL + `update/${id}`)
      .then((res) => {
        return res.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
     delete(id) {
    return axios
      .delete(API_delete_URL + `delete/${id}`)
      .then((res) => {
        console.log(res);
        return res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
}

export default new WasherServices();
