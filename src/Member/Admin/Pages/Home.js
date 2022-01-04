import React, { Component } from "react";
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
// import WasherServices from "../../../Services/Washer/WasherServices";
import "../../Washer/Pages/Washer.css";
import axios from "axios";
import AddReview from "../../../Customer/Pages/AddReview";






export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewNratings: []

        };
    }

    componentDidMount() {
        this.getreview();
    }

    getreview() {

        axios
            .get(
                "http://localhost:8081/reviewratings/allreview")
            .then((response) => response.data)
            .then((data) => {
                this.setState({
                    reviewNratings: data
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
                       REVIEW N RATINGS
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr align="center">
                                  
                                  
                                    <th>Washer Name</th>
                                    <th>Ratings</th>
                                    <th>Review</th>
                                   


                                </tr>
                            </thead>
                            <tbody align="center">
                                {this.state.reviewNratings.length === 0 ?
                                    <tr align="center">
                                        <td colSpan={5}>No  Available</td>
                                    </tr> :
                                    this.state.reviewNratings.map((review) => (
                                        <tr key={review.wName}>
                                            <td>{review.wName}</td>
                                            <td>{review.ratings}</td>
                                            <td>{review.review}</td>
                                          
                                        </tr>
                                    )
                                    )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                  <AddReview/>

            </>

        );

    }
}

