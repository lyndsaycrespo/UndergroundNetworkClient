import Signup from './Signup';
import Login from './Login'; 
import './Auth.css';

const Auth = (props) => {

    return(
        <div>
            <Login updateToken={props.updateToken}/>
        </div>
    )
}

export default Auth; 