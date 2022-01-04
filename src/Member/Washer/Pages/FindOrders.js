import { Card, Table } from 'react-bootstrap'
import React from 'react'
import "./Washer.css"


function FindOrders() {

    return (
        <> 
        <Card className={"border border-dark bg-dark container"} >
            <Card.Header style={{color:'white'}}>
                OrderList
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">
                            <th>OrderId</th>
                            <th>Customer Name</th>
                            <th>Car Name</th>
                            <th>Car Number</th>
                            <th>Address</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr align="center">
                            <td colSpan={8}>No orders for you</td>
                            
                        </tr>
                       
                           
                    </tbody>
                </Table>
            </Card.Body>
            </Card>
            </>
    )
}

export default FindOrders
