 
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {Signin}=useContext(AuthContext)
  const  location =useLocation()
  const naigate=useNavigate()
 
 
   
  const handleLogin = (e) => {
    e.preventDefault();
     
     

    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    console.log(email, password);

    Signin(email,password)
    .then(res=>{

      // after navigate
     naigate(location?.state ? location.state :'/')
      
      console.log(res)
    })
 
    

    .catch(error=>console.log(error.message))

    
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl my-10  text-center">Plese Login </h2>
        <div className=" md:w-3/4 lg:w-1/2 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            Do have not Account?{" "}
            <Link className="text-blue-500 font-bold underline" to="/ragister">
              Ragister
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
