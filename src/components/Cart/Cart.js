import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { Name, Type, Salary, Level, country, img } = props.developers;
    return (
        <div className="cart">
            {/* <h3>Order Summary</h3> */}
            <img src={img} height="200" width="200" alt="" />
            <h1>Name: {Name}</h1>
            <h3>Type: {Type}</h3>
            <h3>Salary: <span>$</span>{Salary}</h3>
            <h3>Level: {Level}</h3>
            <h3>Country: {country}</h3>
            {/* <h5>Type: {total.toFixed(2)}</h5> */}
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin icon"></i></a>&nbsp;&nbsp;&nbsp;
            <button className="btn-hire" onClick={() => props.handelAddToCart(props.developers)}> <i className="fas fa-user-check"></i>&nbsp;&nbsp;Hire</button>
            {/* &nbsp;&nbsp;<i className="fas fa-user-check"></i> */}
        </div >
    );
};

export default Cart;