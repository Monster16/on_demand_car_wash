import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./BookOrder.css"

export class BookOrder extends Component {

     constructor(props) {
     super(props)

    this.state = {
         cName: '',
         carName:'',
         carModel:'',
         address:'',
         status:'',
         serviceDate:'',
         washPackId:'',
         price:'',
     
         
    }
    
    this.handleChange=this.handleChange.bind(this)
}

    
placeorders(e){
        fetch("http://localhost:8082/order/addorder",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                cName: this.state.cName,
                carName:this.state.carName,
                carModel: this.state.carModel,
                address: this.state.address,
                status: this.state.status,
                serviceDate: this.state.serviceDate,
                washPackId: this.state.washPackId,
                price: this.state.price
            })
        })
        .then(response=> response.json())
        .then(response=>{
          alert("Booking Successful..!!!!")
          this.props.history.push("/customer_home/myorders");
            
        })
        
        .catch(err=>{
            alert("Booking Failed..!!!!")
        })
        
    
}
handleChange(changeObject){
    this.setState(changeObject)
}


    render() {
        return (
            <div className='container' >
                <Form>
                    <input type="test" className="form-control" placeholder="Customer Name" onChange={(e)=>this.handleChange({
                              cName: e.target.value
                             })} />
                    <input type="text" className="form-control" placeholder="car Name"  onChange={(e)=>this.handleChange({
                              carName: e.target.value
                             })}/>
                    <input type="text" className="form-control" placeholder="car Model" onChange={(e)=>this.handleChange({
                              carModel: e.target.value
                             })} />
                    <input type="text" className="form-control" placeholder="Address" onChange={(e)=>this.handleChange({
                              address: e.target.value
                    })} />
                    <input type="text" className="form-control" placeholder="Status" onChange={(e)=>this.handleChange({
                              status: e.target.value
                             })}/>
                    {/* <select name="Status" id="status" className="form-control" onChange={(e)=>this.handleChange({
                              status: e.target.value
                             })}>
                        <option value="Placed">Placed</option>
                    </select> */}
                    <input type="date" className="form-control" placeholder="Service date" onChange={(e)=>this.handleChange({
                              serviceDate: e.target.value
                             })}/>
                    <input type="number" className="form-control" placeholder=" Wash PackId" onChange={(e)=>this.handleChange({
                              washPackId: e.target.value
                             })}/>
                    <input type="number" className="form-control" placeholder=" price" onChange={(e)=>this.handleChange({
                              price: e.target.value
                             })}/>
                    <Button  onClick={(e)=>this.placeorders(e)}>
                          Place Order</Button>


                </Form>


            </div>
        )
    }
}

export default BookOrder
