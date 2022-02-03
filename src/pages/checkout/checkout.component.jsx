import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.style.scss';

const CheckoutPage = ({ itemCount, totalPrice, cartItems}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
               ( <CheckoutItem key={cartItem.id} cartItem = { cartItem } />
            ))
        }
        <div className="total">
            <span>TOTAL: ${ totalPrice }</span>
        </div>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    ),
    totalPrice: cartItems.reduce(
        (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.price, 0
    ),
    cartItems
})

export default connect(mapStateToProps)(CheckoutPage);