import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.remove = this.remove.bind(this)
    }

    componentDidMount() {
        const request = {
            method: 'GET',
            headers: {'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJST0xFIjoiQlVZRVIiLCJzdWIiOiJ1c2VyMzMiLCJpc3MiOiJ2ZW5kaW5nLW1hY2hpbmUiLCJleHAiOjE2NDUzMTMzNDQsImlhdCI6MTY0NTMwOTc0NCwianRpIjoiMzcifQ.DbEEisBNAJOXkiZ_rJ1_7fbkNF_kIDp3dOwBzka2fPDbSi6Di6TZOoGFZNPkDIPDUSSzJTCgCZnhhD3U5bUuRWhffEbYvKtlFBjMidR3MZDmlct6x4VZTTb92_Txq1BLBPo6N-m4z7SWMkHqNFWSrG73xmZ_RyQX8XXhYZNZ6NG87zipPes6Ozs7qLCOOwEjsXfdLDklzqXofKxl-NteEbign0j2oB22utD63AnkDs5jC2G56x14xV1YAOK8Rf4RrQlrARiE6oWr-FbvY-rNtP8CMq73kyN3kvk7OqQZEhipiLJTWuy_YNNJGsFyDMSt4HAalgpMzxQa65huE9TQ2g'}
        }
        fetch('/api/v1/products', request)
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    async remove(id) {
        //todo implement remove
    }

    render() {
        const {products} = this.state;

        const productList = products.map(product => {
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.name}</td>
                <td>{product.cost}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/products/" + product.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(product.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/products/new">Add Product</Button>
                    </div>
                    <h3>Products</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Cost</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

}

export default ProductList;