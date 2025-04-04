import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);


    if(loading){
        return <Loading />
    }

    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoute;