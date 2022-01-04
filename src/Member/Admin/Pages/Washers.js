import React, { Component } from "react";
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
// import WasherServices from "../../../Services/Washer/WasherServices";
import "../../Washer/Pages/Washer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';




export default class Washers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            washers: []

        };
    }

    componentDidMount() {
        this.getallwashers();
    }

    getallwashers() {

        axios
            .get(
                "http://localhost:8003/washer/allwashers")
            .then((response) => response.data)
            .then((data) => {
                this.setState({
                    washers: data
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
                                  
                                    <th>Washer Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                      


                                </tr>
                            </thead>
                            <tbody>
                                {this.state.washers.length === 0 ?
                                    <tr align="center">
                                        <td colSpan={5}>No Washer Available</td>
                                    </tr> :
                                    this.state.washers.map((washer) => (
                                        <tr key={washer._id}>
                                            <td>{washer.wName}</td>
                                            <td>{washer.wEmail}</td>
                                            <td>{washer.wPhone}</td>
                                            <td>{washer.wAddress}</td>
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

