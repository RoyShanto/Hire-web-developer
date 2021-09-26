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
    totalProgrammer = [...new Set(totalProgrammer)]
    console.log(totalProgrammer);
    // console.log(totalProgrammer.length);
    totalProgrammer.map(m => totalSalary = totalSalary + m.Salary);
    // members.map(m => console.log(m))

    for (const person of totalProgrammer) {
        console.log(person.Name);
        // document.getElementById('name').innerText = person.Name;
    }
    // {totalProgrammer.map(m => m.Name)}


    return (
        <div>
            <h1>Hired Developers</h1>
            <hr />
            <h2>Total Programmer: {totalProgrammer.length}</h2>
            <h2>Total Cost: {totalSalary}</h2>
            <hr />
            <h2>Programmers Name:</h2>
            {totalProgrammer.map(m => <h4 className="name">{++num + '. '}{m.Name}</h4>)}
        </div>
    );
};

export default CartSummery;