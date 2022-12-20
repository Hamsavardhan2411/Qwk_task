import React, { useState } from 'react'
import { Router, Switch, Route, Redirect } from 'wouter'
import Login from './components/Login'
import SignUp from './components/Signup'
const App = () => {
  const [token,setToken]= useState("")
  return (
    <Router>
    <Switch>
      <Route
      
        path='/signup'
        component={()=><SignUp setToken={setToken}/>}
      />
      <Route
        path='/login'
        component={()=><Login setToken={setToken}/>}
      />
      
      
    </Switch>
  </Router>
  )
}

export default App