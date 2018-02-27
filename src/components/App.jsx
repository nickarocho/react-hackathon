import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './Welcome'
import Catalogue from './Catalogue'
import Checkout from './Checkout'
import { Icon, Preloader, Navbar, NavItem, Chip } from 'react-materialize'
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            products: null,
            order: [],
            search: ""
        }
    }

    addProduct = (product) => {
        console.log(product)
        fetch('api/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                product: product
            })
        })
        .then(data => data.json())
        .then((order) => {
            this.setState({
                order: order
            })
        })
        .catch(err => console.log(err))
    }

    deleteProduct = (e) => {
        console.log(e);
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value.substr(0, 20)});
    }

    // getCartItems = () => {
    //     fetch('/api/order')

    // }

    componentDidMount() {
        fetch('/api/products')
            .then(res => res.json())
            .then(products => this.setState({products}))
            .catch(err => console.log(err))

        fetch('/api/order')
            .then(res => res.json())
            .then(order => this.setState({order}))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className="App">

                {/* <Navbar brand='Amazio' right>
                    <NavItem className="shopping-cart">
                        <Icon medium>shopping_cart</Icon>
                    </NavItem>
                </Navbar> */}

                <header className="App-header">
                    <div>
                        <Link to={'/'}><h1 className="App-logo">Amazio</h1></Link>
                    </div>
                    <div className="shopping-cart">
                        <Link to={'/checkout'}>
                            <Icon medium>shopping_cart</Icon>
                            <Chip className="chip">{this.state.order.length}</Chip>
                        </Link>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" render={ () => <Welcome />} />
                    <Route exact path="/catalogue" render={ () => 
                        this.state.products ? 
                            <Catalogue 
                                products={this.state.products}
                                search={this.state.search}
                                updateSearch={this.updateSearch}
                                addProduct={this.addProduct}
                                deleteProduct={this.deleteProduct}
                                /> 
                        : 
                            <div className="Welcome"><Preloader flashing/></div>} 
                    />
                    <Route exact path="/checkout" render={ () => 
                        this.state.products ? 
                            <Checkout 
                                order={this.state.order}
                                /> 
                        : 
                            <div className="Welcome"><Preloader flashing/></div>} 
                    />
                </Switch>
            </div>
        )
    }

}

export default withRouter(App);