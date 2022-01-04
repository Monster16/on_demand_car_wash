import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./BookOrder.css"

export class AddReview extends Component {

     constructor(props) {
     super(props)

    this.state = {
         wName: '',
         ratings:'',
         review:'',
        
     
         
    }
    
    this.handleChange=this.handleChange.bind(this)
}

    
addreview(e){
        fetch("http://localhost:8081/reviewratings/addreview",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                wName: this.state.wName,
                ratings:this.state.ratings,
                review: this.state.review,
                
            })
        })
        .then(response=> response.json())
        .then(response=>{
          alert(" Thankyou for your valuable review..!!!!")
          this.props.history.push("/customer_home");
            
        })
        
        .catch(err=>{
            alert("Technical error..!!!!")
        })
        
    
}
handleChange(changeObject){
    this.setState(changeObject)
}


    render() {
        return (
            <div className='container' >
                <h1>Add Review</h1>
                <Form>
                    <input type="test" className="form-control" placeholder="Washer Name" onChange={(e)=>this.handleChange({
                              wName: e.target.value
                             })} />
                    <input type="number" className="form-control" placeholder=" Ratings"  onChange={(e)=>this.handleChange({
                              ratings: e.target.value
                             })}/>
                    <input type="text" className="form-control" placeholder="Review " onChange={(e)=>this.handleChange({
                              review: e.target.value
                             })} />
                    
                    <Button  onClick={(e)=>this.addreview(e)}>
                          Add Review </Button>


                </Form>


            </div>
        )
    }
}

export default AddReview
