import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Catalogue from './Catalogue'

class App extends Component {

    constructor() {
        super();
        this.state = {
            products: null,
        }
    }

    componentDidMount() {
        fetch('/api/products')
            .then(res => res.json())
            .then(products => this.setState({products}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Link to='/catalogue'>View Catalogue</Link>
                <Switch>
                    <Route path="/catalogue" render={ () => this.state.products ? <Catalogue products={this.state.products} /> : <h1>Loading...</h1>} />
                </Switch>
            </div>
        )
    }

}

export default withRouter(App);