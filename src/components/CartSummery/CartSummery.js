import React from 'react';
import './CartSummery.css';
const CartSummery = (props) => {
    const { cart } = props;
    let totalProgrammer = [];
    let totalSalary = 0;
    let num = 0;
    for (const product of cart) {
        totalProgrammer.push(product)
    }
    //Remove duplicate data of an array
    totalProgrammer = [...new Set(totalProgrammer)]
    totalProgrammer.map(m => totalSalary = totalSalary + m.Salary);

    return (
        <div className="cart-details">
            <h1>Hired Developers</h1>
            <hr />
            <h2>Total Programmer: {totalProgrammer.length}</h2>
            <h2>Total Cost: <span>$</span>{totalSalary}</h2>
            <hr />
            <h2>Programmers Name:</h2>
            {totalProgrammer.map(m => <h4 key={m.Name} className="name">{++num + '. '}{m.Name}</h4>)}
        </div>
    );
};

export default CartSummery;