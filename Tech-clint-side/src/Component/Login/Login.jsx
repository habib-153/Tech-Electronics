/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";

const Login = () => {
  const { loginWithPass, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleGoogleLogin =()=>{
    signInWithGoogle()
    .then((res) => {
      console.log(res.user)
      toast.success("Login successful")

      // navigate after login
      navigate('/')
    })
    .catch((err) => {
      console.error(err);
      toast.error(err.message)
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithPass(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login successful")

      // navigate after login
      navigate('/')
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message)
      });
  };

  return (
    <div className=" mx-auto min-h-screen ">
      <div className="hero-content mx-auto max-w-xl">
        <div className="card card-body rounded w-full shadow-2xl bg-base-100 md:mt-12">
          <form onSubmit={handleLogin}>
            <h2 className="text-center text-2xl font-bold">Please Login</h2>
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-3 font-semibold">
                New to this Site?{" "}
                <Link to="/Register" className="text-[#db8710] ">
                  Register
                </Link>
              </p>

              <button
                type="submit"
                className="btn text-white w-full bg-[rgba(6,147,227,1)] hover:bg-[#124796]"
              >
                Login
              </button>
            </div>
          </form>
          <div className="">
            <button onClick={handleGoogleLogin} className="hover:bg-gradient-to-r from-[#30a830c9] to-blue-500  btn btn-outline w-full my-2">
              <FcGoogle className="text-xl"></FcGoogle>Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
