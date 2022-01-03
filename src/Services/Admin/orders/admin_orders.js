import axios from "axios";

const ORDER_GetOrder_URL = "http://localhost:8000/admin/";
const ORDER_Update_URL = "http://localhost:8000/admin/order/";
const COMPLTED_ORDERS_URL = "http://localhost:8082/order/";

class AdminOrders {
  findPlacedOrders(status) {
    return axios
      .get(`http://localhost:8000/admin/getorderbystatus/ + status ` , {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
      .then((res) => {
        console.log(res.data);
        return res.data.orders;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  assignOrder(id, washerId) {
    return axios
      .patch(
        ORDER_Update_URL + `updateOrder/${id}`,
        {
          washerId,
        },
        
      )
      .then((res) => {
        return res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findCompletedOrders(status) {
    return axios
      .get(COMPLTED_ORDERS_URL + `findOrderByStatus/${status}`)
      .then((res) => {
        return res.data.orders;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new AdminOrders();
