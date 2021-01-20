//refer to mod login/logout-2 bottom of pg for navbar guidance

import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home/Home';
import Auth from './components/auth/Auth';  
import Read from './components/Shelves/Read';
import Reading from './components/Shelves/Reading';
import ToRead from './components/Shelves/ToRead';
import BubbleBar from './components/Navbar/BubbleBar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import BookCreate from './components/Books/BookCreate';
import BookEdit from './components/Books/BookEdit';
import BookInfo from './components/Books/BookInfo';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken); //state var will not display updated value if called immediately after being set
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    console.log('token cleared');
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} clickLogout={clearToken} /> : (<Router><Redirect to='/' /><Auth updateToken={updateToken} /></Router>))
  }

  return (
      <div>
        {protectedViews()}
      </div>
  );
  }

export default App;
