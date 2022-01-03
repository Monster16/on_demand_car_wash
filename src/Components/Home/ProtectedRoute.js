import {Redirect, Route} from 'react-router-dom';
import useAuth from 'use-auth';



const ProtectedRoute = props => {

    const {customer}=useAuth();
    if(!customer){
        return<Redirect to="/"/>;
    }
    return<Route {...props}/>;

};

export default ProtectedRoute;


