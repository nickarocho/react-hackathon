import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon } from 'react-materialize'

const Catalogue = ({ products }) => (
    <div>
        <Table>
            <thead>
                <tr>
                    <th data-field="id">Name</th>
                    <th data-field="name">Price</th>
                    <th data-field="price">SKU</th>
                    <th data-field="price">Description</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product, idx) => 
                    <tr key={idx}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.sku}</td>
                        <td>
                            {product.description}
                            <Icon small right>remove_circle</Icon>
                            <Icon small right>add_circle</Icon>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    </div>
)

export default Catalogue;