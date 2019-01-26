import React, { Component } from 'react' 
import {Switch, Route, NavLink} from 'react-router-dom'



class Shop extends Component{
    state = {
        shoes: [{
            name: "Shoe1",
            price: 10,
            img: "../img/shoe1.jpeg",
            type: 'shoes'
        }, {
            name: "Shoe2",
            price: 15,
            img: "../img/shoe2.jpeg",
            type: 'shoes'
        }, {
            name: "Shoe3",
            price: 20,
            img: "../img/shoe3.jpeg",
            type: 'shoes',
        }, {
            name: "Shoe4",
            price: 20,
            img: "../img/shoe4.jpeg",
            type: 'shoes',
        }, {
            name: "Shoe5",
            price: 20,
            img: "../img/shoe5.jpeg",
            type: 'shoes',
        }, {
            name: "Shoe6",
            price: 20,
            img: "./img/shoe6.jpeg",
            type: 'shoes',
        }],

        cart: [{
        }],

        hats: [{
            name: "Hat-1",
            price: 10,
            img: "./img/hat1.jpeg",
            type: 'hats'
        }, {
            name: "Hat-2",
            price: 15,
            img: "../img/hat2.jpeg",
            type: 'hats',
        }, {
            name: "Hat-3",
            price: 20,
            img: "../img/hat3.jpeg",
            type: 'hats',
        }, {
            name: "Hat-4",
            price: 20,
            img: "../img/hat4.jpeg",
            type: 'hats',
        }, {
            name: "Hat-5",
            price: 20,
            img: "../img/hat5.jpeg",
            type: 'hats',
        }, {
            name: "Hat-6",
            price: 20,
            img: "../img/hat6.jpeg",
            type: 'hats',
        }],
    }

    addItemToCart = (arr, i) => {
        this.setState({
            cart: this.state.cart.concat(this.state[arr][i])
        })
    }

    render() {
        const { match } = this.props 
        return (
            <div >
                <h6 class="text-right">Welcome {this.props.username}</h6>
                <nav class = "text-left" >
                    <li><NavLink to={match.url + "/store/shoes"}>Shoes</NavLink></li>
                    <li><NavLink to={match.url + "/store/hats"}>Hats</NavLink></li>
                    <li><NavLink to={match.url + "/store/cart"}>Cart</NavLink></li>
                </nav>
                <Switch>
                    <Route path={match.path + "/store/shoes"} render={(props) => <ShoesList {...props} shoes={this.state.shoes} addItemToCart={this.addItemToCart} />} />
                    <Route path={match.path + "/store/hats"} render={(props) => <HatsList {...props} hats={this.state.hats} addItemToCart={this.addItemToCart}/>} />
                    <Route path={match.path + "/store/cart"} render={(props) => <CartList {...props} cart={this.state.cart} />} />
                </Switch>
                </div>
        )
    }
}

class HatsList extends Component{
    render(){
        let ItemsJSX = this.props.hats.map(((element, i) => {
            return <ShopItem 
                key = {i}
                id = {i}
                name = {element.name}
                price = {element.price}
                img = {element.img}
                type = {element.type}
                addItemToCart = {this.props.addItemToCart}
            />
        }))

        return ( 
            <div>
                <h1> Hats Component </h1>
                <div>{ItemsJSX}</div>
            </div>
        )
    }
}

class ShoesList extends Component {

    render() {
        let ItemsJSX = this.props.shoes.map(((element, i) => {
            return <ShopItem 
                key = {i}
                id = {i}
                name = {element.name}
                price = {element.price}
                img = {element.img}
                type = {element.type}
                addItemToCart = {this.props.addItemToCart}
            />
        }))

        return ( 
            <div>
                <h1> Shoes Component </h1>
                <div>{ItemsJSX}</div>
            </div>
            
        )
    }
}

class CartList extends Component {
    render() {
        let ItemsJSX = this.props.cart.map(((element, i) => {
            return <CartItem 
                key = {i}
                id = {i}
                name = {element.name}
                price = {element.price}
                img = {element.img}
            />
        }))

        return ( 
            <div>
                <h1> Cart Component </h1>
                <div>{ItemsJSX}</div>
            </div>
            
        )
    }
}

class ShopItem extends Component{
    render(){
        return(
            <div>
                <div>id: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
                <div>Price: {this.props.price}</div>
                <img src= {this.props.img} />
                <button onClick={() =>this.props.addItemToCart(this.props.type, this.props.id)}>Add to Cart</button>
            </div>
        )
    }
}

class CartItem extends Component{
    render(){
        return(
            <div>
                <div>id: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
                <div>Price: {this.props.price}</div>
                < img src = "{this.props.img}" />
            </div>
        )
    }
}

export default Shop