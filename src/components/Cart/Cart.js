import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // Destructuring
    const { Name, Type, Salary, Level, country, img } = props.developers;
    return (
        <div className="cart">
            <img src={img} height="200" width="200" alt="" />
            <h1>Name: {Name}</h1>
            <h3>Type: {Type}</h3>
            <h3>Salary: <span>$</span>{Salary}</h3>
            <h3>Level: {Level}</h3>
            <h3>Country: {country}</h3>
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin icon"></i></a>&nbsp;&nbsp;&nbsp;
            {/* child to parent */}
            <button className="btn-hire" onClick={() => props.handelAddToCart(props.developers)}> <i className="fas fa-user-check"></i>&nbsp;&nbsp;Hire</button>
        </div >
    );
};

export default Cart;