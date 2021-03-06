import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signInClicked } from "../../ReduxStore/Actions/userActions";
import {
  Route,
  Redirect,
} from "react-router-dom";


const InternalSignIn = props => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Route>
      {props.userInformation && props.userInformation.token ? 
        <Redirect to='/home'/>
       : 
        <div className='auth-page'>
          <div className='container page'>
            <div className='row'>
              <div className='col-md-6 offset-md-3 col-xs-12'>
                <h1 className='text-xs-center'>Sign in</h1>
                <p className='text-xs-center'>
                  <a href='#top'> Need an account? </a>
                </p>

                <form>
                  <fieldset className='form-group'>
                    <input
                      id='username'
                      className='form-control form-control-lg'
                      type='text'
                      onChange={event => setEmail(event.target.value)}
                      placeholder='Email'></input>
                  </fieldset>

                  <fieldset className='form-group'>
                    <input
                      id='password'
                      className='form-control form-control-lg'
                      type='password'
                      onChange={event => setPassword(event.target.value)}
                      placeholder='Password'></input>
                  </fieldset>
                
                    <button
                      type="button"
                      className='btn btn-lg btn-primary pull-xs-right'
                      onClick={()=> {
                        props.onSignInClicked(email, password);
                      }}>
                      Sign in
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </Route>
  );
};

InternalSignIn.propTypes = {
  userInformation: PropTypes.object,
  onSignInClicked: PropTypes.func,
};

const mapStateToProps = ({userReducer}) => {

  const {
    userInformation  
  } = userReducer

  return {
    userInformation  
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onSignInClicked: (email, password) =>
      dispatch(signInClicked(email, password)),
  };
};

export const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalSignIn);
