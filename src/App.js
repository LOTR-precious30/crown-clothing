import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import CheckoutPage from "./pages/checkout/checkout.component";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount(){
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => {
              console.log(this.state);
            })
          });
        }
        else{
          setCurrentUser(userAuth);
        }
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
    

    render(){
      return (
        // <ThemeProvider theme={darkTheme}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />       
            <Route path ='/shop' component={ShopPage} />
            <Route exact path ='/checkout' component={CheckoutPage} />
            <Route exact path ='/signin' render={() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUp />)} />
          </Switch>
        </div>
        // </ThemeProvider>
      );
    }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
