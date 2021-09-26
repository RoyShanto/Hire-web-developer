import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartSummery from '../CartSummery/CartSummery';
import './Developers.css';
const Developers = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./MembersData.json')
            .then(req => req.json())
            .then(data => setMembers(data))
    }, [])
    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // addToDb(product.key);  //add local Storage
    }

    return (
        <div className="container">
            <div className="cart-container">
                {
                    members.map(member => <Cart key={member.ID} developers={member} handelAddToCart={handelAddToCart} />)
                }
            </div>
            <div className="summery">
                <div className="cart-summery">
                    <CartSummery cart={cart} />
                </div>
            </div>

        </div>
    );
};

export default Developers;