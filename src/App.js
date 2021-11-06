import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import SecureRoute from './components/common/SecureRoute.js'
import Landing from './components/auth/Landing.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import GameStore from './components/games/Store.js'
import GameProfile from './components/games/GameProfile.js'
import Navbar from './components/common/Navbar.js'
import GameNew from './components/games/GameNew.js'
// import GameComments from './components/games/GameComments.js'
import SecureRoute from './components/common/SecureRoute.js'
import UserProfile from './components/common/UserProfile.js'
import UserNavbar from './components/common/UserNavbar.js'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <SecureRoute path ="/games/new">
          <Navbar />
          <GameNew />
        </SecureRoute>
        {/* <Route path ="/games/:gameId/comments">
          <Navbar />
          <GameComments />
        </Route> */}
        <Route path ="/games/:gameId">
          <Navbar />
          <GameProfile />
        </Route>
        <Route path ="/games">
          <Navbar />
          <GameStore />
        </Route>
        <Route path ="/register">
          <Register />
        </Route>
        <Route path ="/login">
          <Login />
        </Route>
        <Route path ="/profile">
          <UserNavbar />
          <UserProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}

export default App
