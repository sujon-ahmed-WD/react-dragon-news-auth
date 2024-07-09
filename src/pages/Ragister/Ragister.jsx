 import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
 
const Ragister = () => {
  const {createUser}=useContext(AuthContext)
 const handleRagister=e=>{
      e.preventDefault()
      const form=new FormData(e.target)
      const name=form.get('name')
      const email=form.get('email')
      const password=form.get('password')
      console.log(name,email,password);
      createUser(email,password,name)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))

 } 
 
  return (
    <div>
      <h1 className="text-center">Please Register</h1>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRagister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoUrl</span>
                </label>
                <input
                  type="email"
                  placeholder="photoUrl"
                  className="input input-bordered"
                   
                />
              </div>
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
                <button className="btn btn-primary">Ragister</button>
                <p className="pt-2">already have a count? <Link className="text-green-700 font-bold underline" to='/login'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
