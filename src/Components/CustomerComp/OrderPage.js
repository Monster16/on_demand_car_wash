import { blue, blueGrey, orange, red } from "@material-ui/core/colors";
import React from "react";
import "./OrderPage.css"

function OrderPage() {
  return (
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-50">
                <h3>Order Booking</h3>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  placeholder="Order ID"
                />
                <input
                  type="text"
                  id="cId"
                  name="cId"
                  placeholder="Customer ID"
                />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Order Status"
                />
                <input
                  type="text"
                  id="status"
                  name="status"
                  placeholder="Enter Your Address"
                />
                <input
                  type="date"
                  id="serviceDate"
                  name="serviceDate"
                  placeholder="Enter Your Date"
                />
                <br />
                <br />

                <input
                  type="text"
                  id="carName"
                  name="carName"
                  placeholder="Enter Your Car Name"
                />

                <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  placeholder="Enter Your Car Model"
                />

                <input
                  type="text"
                  id="washPackId"
                  name="washPackId"
                  placeholder="Select Wash Pack ID"
                />
              </div>

              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style={{ color: blueGrey }}></i>
                  <i class="fa fa-cc-amex" style={{ color: blue }}></i>
                  <i class="fa fa-cc-mastercard" style={{ color: red }}></i>
                  <i class="fa fa-cc-discover" style={{ color: orange }}></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                />
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                />
                <label for="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                />
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                    />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>
            </div>

            <input type="submit" value="Continue to checkout" class="btn" />
          </form>
        </div>
      </div>
      <div class="col-25">
        <div class="container">
          <h4>
            Cart{" "}
            <span class="price" style={{ color: "black" }}>
              <i class="fa fa-shopping-cart"></i>
              <b>1</b>
            </span>
          </h4>
          <p>
            washpackID 1 <span class="price">₹200</span>
          </p>

          <hr />
          <p>
            Total
            <span class="price" style={{ color: "black" }}>
              <b>₹200</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
