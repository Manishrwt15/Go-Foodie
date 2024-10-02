import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopPup = ({ setShowLogin }) => {
  const {url,setToken} = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevState) => ({...prevState, [name]: value }));
  };

  const onLogin  = async (event) =>{
    event.preventDefault();
    let newUrl = url;
    if(currentState === 'Login'){
      newUrl += "/api/user/login";
    }else{
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
    }else{
      alert(response.data.message);
    }
  } 

  return (
    <div className="fixed inset-0 z-[50] w-full h-full bg-[#00000090] grid">
      <form  onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)]text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-(fadeIn_1.5s)">
        <div className="flex justify-between items-center text-[#000]">
          <h2 className="font-bold text-xl">{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
              className="outline-none border border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            name="email"
              onChange={onChangeHandler}
              value={data.email}
            className="outline-none border border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
              onChange={onChangeHandler}
              value={data.password}
            className="outline-none border border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
            required
          />
        </div>
        <button type="submit" className="border-none p-[10px] rounded-[4px] text-white bg-[#DF5E11] text-[15px] cursor-pointer">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-[8px] mt-[-15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-[#DF5E11] font-500 cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-[#DF5E11] font-500 cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopPup;
