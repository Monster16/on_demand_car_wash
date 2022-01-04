import React, { Component } from "react";
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
// import WasherServices from "../../../Services/Washer/WasherServices";
import "../../Washer/Pages/Washer.css";
import axios from "axios";





export default class CompletedOrders extends Component {
    constructor(props) {
    super(props);
    this.state = {
        orders: []

    };
}

componentDidMount() {
    this.getallorders();
}

getallorders() {

    axios
        .get(
            "http://localhost:8082/findOrderByStatus/{status}", {
                method: "GET",
                headers: {

                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
        .then((response) => response.data)
        .then((data) => {
            this.setState({
                orders: data
            });
        })
        .catch((error) => {
            console.log(error);
            
        });
}

    render() {

        return (
            <>
                <Card className={"border border-dark bg-dark container"} >
                    <Card.Header style={{ color: 'white' }}>
                        OrderList
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr align="center">
                                   
                                    <th>Customer Name</th>
                                    <th>Address</th>
                                    <th>Car Name</th>
                                    <th>Car Model</th>
                                    <th>Service Id</th>
                                    <th>Service date</th>
                                    <th>price </th>
                                    <th>Status </th>
                                    <th>Assigned Washer</th>
                                    <th>orderId</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orders.length === 0 ?
                                    <tr align="center">
                                        <td colSpan={10}>No Completed Available</td>
                                    </tr> :
                                    this.state.orders.map((order) => (
                                        <tr key={order.orderId}>
                                            <td>{order.cName}</td>
                                            <td>{order.address}</td>
                                            <td>{order.carName}</td>
                                            <td>{order.carModel}</td>
                                            <td>{order.washPackId}</td>
                                            <td>{order.serviceDate}</td>
                                             <td>{order.price}</td>
                                             <td>{order.status}</td>
                                             <td>{order.Washer}</td>
                                             <td>{order.orderId}</td>
                                           
                                        </tr>

                                    )

                                    )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

            </>

        );

    }
}

