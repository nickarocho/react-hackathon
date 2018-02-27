import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'react-materialize'
import './App.css';

const Checkout = ({products, order}) => {

    return (
        <div>
            <div className="sub-header">
                <Link to='/catalogue'><Button waves='light' className='back-btn'><Icon>arrow_backward</Icon> View Catalogue</Button></Link>
            </div>
            <Table bordered>
                <thead>
                    <tr>
                        <th data-field="name">Name</th>
                        <th data-field="price">Price</th>
                        <th data-field="quantity">Quantity</th>
                    </tr>
                </thead>
        
                <tbody>
                    {order.map((product, idx) => 
                        <tr key={idx}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>0</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )

}


export default Checkout;