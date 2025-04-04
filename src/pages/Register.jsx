
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    const { createUser, updateUser ,user} = useContext(AuthContext);
    const [error, setError] = useState({})
    const navigate = useNavigate()
    // const [users , setUser ] = useState()


    const handleRegister = (e) => {

        e.preventDefault();
        console.log('register coming soon');

        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        console.log(name, photo, email, password);

        if (name.length < 5) {
            setError({ ...error, name: "name should be at least 5 character or more" })
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result);
                alert('user successfully signin')
                // setUser(user)
                
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        // alert('update successfully')
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })

    }



    return (
        <div>
            <h1 className="text-4xl text-green-600 py-5 text-center">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="hero bg-base-200 py-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name="name" className="input" placeholder="name" />
                                {
                                    error && <p>{error.name}</p>
                                }
                                <label className="fieldset-label">PhotoURL</label>
                                <input type="text" name="photo" className="input" placeholder="photoURL" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <div className="py-2 relative ">
                                    <div className="">
                                        <label className="fieldset-label mb-1">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />
                                    </div>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p>All ready have an account! Please  <Link to="/auth/login">Log In</Link> </p>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default Register;