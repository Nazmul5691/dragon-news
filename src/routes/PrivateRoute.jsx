import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <Loading />
    }

    if(user && user?.email){
        return children;
    }
    
    
    return <Navigate to="/auth/login" state={location.pathname} />;
    
};

export default PrivateRoute;