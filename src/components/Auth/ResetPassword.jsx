import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import forgot from "../../assets/reset.png";
import { FaAngleLeft } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { resetpassword } from "../../Services/Operation/authAPI";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData,setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const {loading} = useSelector((state) => state.auth)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetpassword(password, confirmPassword, token));
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[60%]  shadow-2xl  flex flex-col rounded-3xl justify-center items-center ">
        <div className="flex text-[#174b3a] font-roboto text-[1.15rem] mt-1 -ml-[47rem]">
          <Link to={"/"} className="flex">
            <FaAngleLeft className="mt-1" />
            <p>Back to login</p>
          </Link>
        </div>

        <div className=" relative mt-[4rem]">
          <div className="h-[5.6rem] w-[7.9rem] absolute ml-[12.5rem] -mt-[3.5rem] -rotate-12 -z-10">
            <img src={forgot} alt="" />
          </div>
          <div className=" text-[#174b3a]  text-center w-[100%]">
            <p className=" text-3xl font-roboto font-semibold z-50">
              Reset your password!
            </p>
            <p className="text-[1.5rem] w-[60%] ml-[12rem] font-roboto font-medium">
              Forgot your old password? Enter your password and you’re all set
            </p>
          </div>
        </div>

        <form onSubmit={handleOnSubmit}  className="w-[50%]">
          <div>
            <label
              for="newpassword"
              className="block mb-2 mt-3 font-medium  text-xl text-[#000000b5] font-roboto"
            >
              New password <span className=" text-red-700">* </span>
            </label>
            <div>
              <input
                className=" bg-[#499f682b] transition-all duration-200 hover:scale-105 font-roboto placeholder:text-2xl"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleOnChange}
                name="password"
                id=""
                placeholder="••••••"
              />
              <div onClick={() => setShowPassword((prev) => !prev)} className=" absolute ml-[26.5rem] -mt-[2.5rem] text-[#000000b5] text-xl  ">
              {showPassword ? (
                  <IoEyeOffOutline fontSize={24} fill="#AFB2BF" />
                ) : (
                  <IoEyeOutline fontSize={24} fill="#AFB2BF" />
                )}
              </div>
            </div>
          </div>
          <div>
            <label
              for="newpassword"
              className="block mb-2 mt-3 font-medium  text-xl text-[#000000b5] font-roboto"
            >
              Confirm password <span className=" text-red-700">* </span>
            </label>
            <div className="">
              <input
                className=" bg-[#499f682b] transition-all duration-200 hover:scale-105 font-roboto placeholder:text-2xl"
                required
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleOnChange}
                name="confirmPassword"
                id=""
                placeholder="1234"
              />
              <div   onClick={() => setShowConfirmPassword((prev) => !prev)} className=" absolute ml-[26.5rem] -mt-[2.5rem] text-[#000000b5] text-xl  ">
              {showConfirmPassword ? (
                  <IoEyeOffOutline fontSize={24} fill="#AFB2BF" />
                ) : (
                  <IoEyeOutline fontSize={24} fill="#AFB2BF" />
                )}
              </div>
            </div>
          </div>
          <div className="">
            <button type="submit" className=" bg-[#f19a3e] m-auto p-4 rounded-3xl tracking-widest w-[60%] transition-all duration-200 hover:scale-105 text-white flex justify-center text-xl mb-6 mt-4">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
