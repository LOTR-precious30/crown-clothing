import React from "react";
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component'
import Button from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = event => {
            event.preventDefault();

            this.setState({ email: '', password:'' })
        }

        this.handleChange = event => {
            const { value, name } = event.target;

            this.setState({ [name]: value })
        }
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="email"
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required 
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password"
                        label="password" 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required 
                    />

                    <div className="buttons">
                        <Button type="submit">
                            Sign In
                        </Button> 
                        <Button onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign In with Google
                        </Button> 
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;