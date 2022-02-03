import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt="item" />
        </div>
        <span className="name">{ cartItem.name }</span>
        <span className="quantity">
            <div className="arrow">&#10094;</div>
            <span className="value">{ cartItem.quantity }</span>
            <div className="arrow">&#10095;</div>

        </span>
        <span className="price">${ cartItem.price }</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => (
    {
        clearItem: item => dispatch(clearItemFromCart(item))
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem);