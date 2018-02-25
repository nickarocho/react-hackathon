import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Catalogue from './Catalogue'
import Welcome from './Welcome'
import { Icon, Preloader } from 'react-materialize'
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            search: ""
        }
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value.substr(0, 20)});
    }

    componentDidMount() {
        fetch('/api/products')
            .then(res => res.json())
            .then(products => this.setState({products}))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Link to={'/'}><h1 className="App-logo">Amazio</h1></Link>
                    </div>
                    <div className="shopping-cart">
                        <Icon medium>shopping_cart</Icon>
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