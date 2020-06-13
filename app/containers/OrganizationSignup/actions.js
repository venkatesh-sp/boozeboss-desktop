/*
 *
 * OrganizationSignup actions
 *
 */

import { 
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR
 } from './constants';

export function signup(auth) {
  return {
    type: SIGNUP_REQUEST,
    auth
  };
}

export function signupSuccess(token) {
  localStorage.setItem('jwt', token);
  return {
    type: SIGNUP_SUCCESS,
  };
}

export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error 
  };
}
