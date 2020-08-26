import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div style={{ textAlign: "center"}}>
            <h4>This is Cart: {cart.length}</h4>
            <h4>Total population: {totalPopulation}</h4>
        </div>
    );
};

export default Cart;