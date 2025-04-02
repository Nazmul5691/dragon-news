import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext);

    return (
        <div className="flex justify-between ">
            <div className="flex-1">{user && user.email}</div>
            <div className="flex-1 space-x-4 flex justify-center items-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex flex-1 gap-[9px] items-center justify-end">
                <div><img className="w-[41px]" src={userIcon} alt="" /></div>
                <div>
                    {
                        user ? 
                        <button onClick={logOutUser} className="px-[43px] py-3 bg-[#403F3F] text-white">Log Out</button> 
                        : 
                        <Link to='/auth/login' className="px-[43px] py-3 bg-[#403F3F] text-white">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;