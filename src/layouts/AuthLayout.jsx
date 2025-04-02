import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="max-w-6xl mx-auto pt-10">
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;