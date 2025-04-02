import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between ">
            <div className="flex-1"></div>
            <div className="flex-1 space-x-4 flex justify-center items-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex flex-1 gap-[9px] items-center justify-end">
                <div><img className="w-[41px]" src={userIcon} alt="" /></div>
                <div><button className="px-[43px] py-3 bg-[#403F3F] text-white">Login</button></div>
            </div>
        </div>
    );
};

export default Navbar;