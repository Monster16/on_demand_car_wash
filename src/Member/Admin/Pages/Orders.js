import React, { Component } from "react";
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
// import WasherServices from "../../../Services/Washer/WasherServices";
import "../../Washer/Pages/Washer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';




export default class Orders extends Component {
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

    axios.get(
            "http://localhost:8000/admin/getallorders/", {
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
                        WasherList
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr align="center">
                                    <th>orderId</th>
                                    <th>Customer Id</th>
                                     <th>Address</th>
                                    <th>Car Name</th>
                                    <th>Car Model</th>
                                    <th>Service Id</th>
                                    <th>Service date</th>
                                    <th>Assigned Washer</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orders.length === 0 ?
                                    <tr align="center">
                                        <td colSpan={8}>No Order Available</td>
                                    </tr> :
                                    this.state.orders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.cId}</td>
                                            <td>{order.address}</td>
                                            <td>{order.carName}</td>
                                            <td>{order.carModel}</td>
                                            <td>{order.washPackId}</td>
                                            <td>{order.serviceDate}</td>
                                           
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

