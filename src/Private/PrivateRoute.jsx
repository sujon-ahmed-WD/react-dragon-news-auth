import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";

 
const PrivateRoute = ({children}) => {
    const {User,loading} =useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);
     
    
    

    if(loading)
    {
        return <div className=" h-screen flex items-center justify-center">
            <div className=""><span className="text-red-600 text-center loading loading-infinity loading-lg"></span></div>
            </div>
    }

    if(User)
    {
         return children;
    }
    return  <Navigate state={location.pathname}  to="/login"></Navigate>;
};

export default PrivateRoute;