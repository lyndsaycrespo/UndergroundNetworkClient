//refer to mod login/logout-2 bottom of pg for navbar guidance

import React from 'react';
import './App.css';
//import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
//import Home from './components/Home/Home';
import Auth from './components/auth/Auth';  
import { SSL_OP_NO_TICKET } from 'constants';
//import Read from './components/Shelves/Read';
//import BubbleBar from './components/Navbar/BubbleBar';
//import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


  type ClockState = {
    time: Date
};

class Clock extends React.Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
         this.state = {
             time: new Date()
         }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };


    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;



const App: React.FunctionComponent = () => {

  //class App extends React.Component { ???
  //constructor (props) {
    //super (props);

    this.state = {
      value:
    }

  const [sessionToken, setSessionToken] = useState('');

  type SessionToken = {
    sessionToken: string;
  }

  type SetSessionToken = {
    setSessionToken: string; 
  }

class App extends React.Component<SessionToken, SetSessionToken>{
  state: SetSessionToken = {
    setSessionToken: //string here
  }
  render() {
    return ()
  }
}

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken: string) => { 
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
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} clickLogout={clearToken} /> : (<Router><Redirect to='/' /><Auth updateToken={updateToken} /></Router>))
  }
  <h1>{this.state.time.toLocaleTimeString()}</h1>

  return (
      <div>
        {protectedViews()}     
      </div>
  );
  }

export default App;
