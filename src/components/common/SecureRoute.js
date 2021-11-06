import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { removeToken, isAuthenticated } from '../lib/auth.js'

function SecureRoute({ component: Component, ...rest }) {

  if (isAuthenticated()) return <Route {...rest} component={Component} />
  removeToken()

  return <Redirect to="/login" />
}

export default SecureRoute
