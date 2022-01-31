import React from "react";
import './custom-button.stye.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;