import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'react-materialize'
import './App.css';

const Catalogue = ({products, search, updateSearch, addProduct}) => {

    let filteredProducts = products.filter(
        (product) => {
            return product.name.indexOf(search) !== -1;
        }
    )

    return (
        <div>
            <div className="sub-header">
                <input className="search" placeholder="Type to search..." type="text"
                    value={search}
                    onChange={updateSearch} />
            </div>
            <Table bordered>
                <thead>
                    <tr>
                        <th data-field="name">Name</th>
                        <th data-field="price">Price</th>
                        <th data-field="sku">SKU</th>
                        <th data-field="description">Description</th>
                        <th data-field="actions"></th>
                    </tr>
                </thead>
        
                <tbody>
                    {filteredProducts.map((product, idx) => 
                        <tr key={idx}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.sku}</td>
                            <td>{product.description}</td>
                            <td>
                                <Button 
                                    floating small 
                                    className='green' 
                                    waves='light' 
                                    icon='add' 
                                    onClick={() => addProduct(product._id)} 
                                    id={product._id}/>
                                <Button floating small className='red' waves='light' icon='remove' />
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )

}


export default Catalogue;